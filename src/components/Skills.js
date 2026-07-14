import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const row1 = [
    "⚛ React",
    "🟢 Node.js",
    "🚀 Express.js",
    "🍃 MongoDB",
    "🎨 Tailwind CSS",
    "🔐 JWT",
    "☁ Cloudinary",
    "🐙 Git",
    "📮 Postman",
  ];

  const row2 = [
    "☕ Java",
    "🐍 Python",
    "💻 DSA",
    "📡 ESP32",
    "🤖 Arduino",
    "🌐 REST APIs",
    "⚡ JavaScript",
    "📱 Responsive Design",
    "📝 OCR",
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Expertise</h2>

              <p>
                I am an Electronics and Communication Engineering student
                passionate about software development and emerging technologies.
                <br />
                My interests span full-stack web development and IoT solutions,
                allowing me to design and develop technology-driven projects.
              </p>

              {/* First Row */}
              <div className="marquee">
                <div className="marquee-content">
                  {[...row1, ...row1].map((skill, index) => (
                    <span className="skill-pill" key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Second Row */}
              <div className="marquee reverse">
                <div className="marquee-content">
                  {[...row2, ...row2].map((skill, index) => (
                    <span className="skill-pill" key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};