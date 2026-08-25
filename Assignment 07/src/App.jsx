import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState([
    {
      id: 1001,
      title: "Login Issues - Can't Access Account",
      description:
        "Customer is unable to log in to their account. They've tried resetting their password multiple times but still can't access.",
      customer: "John Smith",
      priority: "HIGH PRIORITY",
      status: "Open",
      createdAt: "1/15/2024",
    },
    {
      id: 1002,
      title: "Payment Failed - Card Declined",
      description:
        "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
      customer: "Sarah Johnson",
      priority: "HIGH PRIORITY",
      status: "Open",
      createdAt: "1/16/2024",
    },
    {
      id: 1003,
      title: "Unable to Download Invoice",
      description:
        "Customer cannot download their January invoice from the billing section. The download button is not working.",
      customer: "Michael Brown",
      priority: "MEDIUM PRIORITY",
      status: "In-Progress",
      createdAt: "1/17/2024",
    },
    {
      id: 1004,
      title: "Incorrect Billing Address",
      description:
        "Customer's billing address shows a different city. They updated it but it still displays the old one.",
      customer: "Emily Davis",
      priority: "LOW PRIORITY",
      status: "Open",
      createdAt: "1/18/2024",
    },
    {
      id: 1005,
      title: "App Crash on Launch",
      description:
        "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
      customer: "David Wilson",
      priority: "HIGH PRIORITY",
      status: "Open",
      createdAt: "1/19/2024",
    },
    {
      id: 1006,
      title: "Refund Not Processed",
      description:
        "Customer requested a refund two weeks ago but has not received the amount yet.",
      customer: "Sophia Taylor",
      priority: "MEDIUM PRIORITY",
      status: "In-Progress",
      createdAt: "1/20/2024",
    },
    {
      id: 1007,
      title: "Two-Factor Authentication Issue",
      description:
        "Customer is not receiving 2FA codes on their registered phone number.",
      customer: "James Anderson",
      priority: "HIGH PRIORITY",
      status: "Open",
      createdAt: "1/21/2024",
    },
    {
      id: 1008,
      title: "Unable to Update Profile Picture",
      description:
        "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
      customer: "Olivia Martinez",
      priority: "LOW PRIORITY",
      status: "Open",
      createdAt: "1/22/2024",
    },
    {
      id: 1009,
      title: "Subscription Auto-Renewal",
      description:
        "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
      customer: "Liam Thomas",
      priority: "MEDIUM PRIORITY",
      status: "In-Progress",
      createdAt: "1/17/2024",
    },
    {
      id: 1010,
      title: "Missing Order Confirmation Email",
      description:
        "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
      customer: "Isabella Garcia",
      priority: "MEDIUM PRIORITY",
      status: "Open",
      createdAt: "1/24/2024",
    },
  ]);

  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  const inProgressCount = tasks.length;
  const resolvedCount = resolved.length;

  const addToTask = (ticket) => {
  const alreadyAdded = tasks.some((task) => task.id === ticket.id);

  if (alreadyAdded) {
    toast.info("This ticket is already in Task Status.");
    return;
  }

  setTasks([...tasks, ticket]);
  setTickets(tickets.filter((item) => item.id !== ticket.id));

  toast.success(`"${ticket.title}" added to Task Status.`);
};

  const completeTask = (ticket) => {
  setTasks(tasks.filter((task) => task.id !== ticket.id));
  setResolved([...resolved, ticket]);

  toast.success(`"${ticket.title}" completed successfully!`);
};

  return (
    <div className="app">

     
    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop
    />
      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="logo">
          CS — Ticket System
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>

          <button className="new-ticket">
            ＋ New Ticket
          </button>
        </nav>

      </header>


      {/* ================= MAIN ================= */}

      <main className="container">

        {/* ================= BANNER ================= */}

        <section className="cards">

          <div className="status-card progress-card">

            <div className="card-content">
              <p>In-Progress</p>
              <h2>{inProgressCount}</h2>
            </div>

          </div>


          <div className="status-card resolved-card">

            <div className="card-content">
              <p>Resolved</p>
              <h2>{resolvedCount}</h2>
            </div>

          </div>

        </section>


        {/* ================= TICKETS + TASK STATUS ================= */}

        <section className="ticket-section">


          {/* CUSTOMER TICKETS */}

          <div className="tickets-area">

            <h2 className="section-title">
              Customer Tickets
            </h2>

            <div className="ticket-grid">

              {tickets.map((ticket) => (

                <div
                  className="ticket-card"
                  key={ticket.id}
                  onClick={() => addToTask(ticket)}
                >

                  <div className="ticket-top">

                    <h3>
                      {ticket.title}
                    </h3>

                    <span
                      className={
                        ticket.status === "Open"
                          ? "status open"
                          : "status progress"
                      }
                    >

                      <span className="dot"></span>

                      {ticket.status}

                    </span>

                  </div>


                  <p className="description">
                    {ticket.description}
                  </p>


                  <div className="ticket-bottom">

                    <span>
                      #{ticket.id}
                    </span>

                    <span
                      className={
                        ticket.priority === "HIGH PRIORITY"
                          ? "priority high"
                          : ticket.priority === "MEDIUM PRIORITY"
                          ? "priority medium"
                          : "priority low"
                      }
                    >
                      {ticket.priority}
                    </span>

                    <span className="customer">
                      {ticket.customer}
                    </span>

                    <span>
                      ▣ {ticket.createdAt}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* ================= TASK STATUS ================= */}

          <aside className="task-sidebar">

            <h2>
              Task Status
            </h2>

            <p className="task-info">
              Select a ticket to add to Task Status
            </p>


            {tasks.length === 0 ? (

              <p className="no-task">
                No tickets selected yet.
              </p>

            ) : (

              <div className="task-list">

                {tasks.map((task) => (

                  <div
                    className="task-item"
                    key={task.id}
                  >

                    <h3>
                      {task.title}
                    </h3>

                    <button
                      className="complete-btn"
                      onClick={() => completeTask(task)}
                    >
                      Complete
                    </button>

                  </div>

                ))}

              </div>

            )}


            {/* RESOLVED */}

            <div className="resolved-area">

              <h3>
                Resolved Task
              </h3>

              {resolved.length === 0 ? (

                <p className="no-task">
                  No resolved tasks yet.
                </p>

              ) : (

                <div className="resolved-list">

                  {resolved.map((task) => (

                    <p key={task.id}>
                      ✓ {task.title}
                    </p>

                  ))}

                </div>

              )}

            </div>

          </aside>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-about">

            <h2>
              CS — Ticket System
            </h2>

            <p>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an
              unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

          </div>


          <div className="footer-column">

            <h3>Company</h3>

            <a href="#">About Us</a>
            <a href="#">Our Mission</a>
            <a href="#">Contact Sales</a>

          </div>


          <div className="footer-column">

            <h3>Services</h3>

            <a href="#">Products &amp; Services</a>
            <a href="#">Customer Stories</a>
            <a href="#">Download Apps</a>

          </div>


          <div className="footer-column">

            <h3>Information</h3>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Join Us</a>

          </div>


          <div className="footer-column social-column">

            <h3>Social Links</h3>

            <a href="#">
              <span className="social-icon">𝕏</span>
              @CS — Ticket System
            </a>

            <a href="#">
              <span className="social-icon">in</span>
              @CS — Ticket System
            </a>

            <a href="#">
              <span className="social-icon">f</span>
              @CS — Ticket System
            </a>

            <a href="#">
              <span className="social-icon">✉</span>
              support@cst.com
            </a>

          </div>

        </div>


        <div className="copyright">
          © 2025 CS — Ticket System. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;