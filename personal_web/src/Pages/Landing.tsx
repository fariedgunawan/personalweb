const Landing = () => {
  return (
    <div className="body-landing-openers bg-white">
      {/*openers */}
      <div className="container flex flex-col justify-center h-[42rem] px-[20px]">
        <div className="helow flex flex-col">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[80px] rounded-[50%]" alt="" />
          <h2 className="font-bold text-[35px] w-[340px] mt-[35px]">
            Hello! I'm <span className="text-[#002bb1]">Faried Gunawan 👋</span>
          </h2>
        </div>
        <div className="helow-2 mt-[40px]">
          <h2 className="text-[25px] font-semibold ">A Software Engineer based in Jakarta, Indonesia</h2>
          <h2 className="text-[18px] font-medium mt-[15px]">I'm a software engineer with a passion for building scalable and efficient software systems. With a strong</h2>
        </div>

        <div className="helow-3 mt-[50px] flex flex-row gap-[10px] items-center">
          <button className="btn bg-[#002bb1] border-0 font-semibold rounded-xl">
            Talk With Me{" "}
            <span className="ml-[5px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </span>
          </button>
          <button className="btn bg-transparent shadow border-2 border-[#002bb1] text-[#002bb1] font-semibold rounded-xl">
            See My Project{" "}
            <span className="ml-[5px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/*end of openers */}

      {/*working experience section */}
      <div className="working bg-[#dbe2fe] h-[100rem] px-[20px]">
        <div className="container py-[20px]">
          <div className="working flex flex-col">
            <div className="title-of-working">
              <h2 className="font-bold text-[25px] text-[#002bb1]">Working Experience</h2>
            </div>
            {/*start list of working */}
            <div className="working-list mt-[20px] text-[#002bb1]">
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start md:text-end">
                    <time className="font-mono italic">May 2021 - Jul 2021</time>
                    <div className="text-lg font-black">Web Developer Internships</div>
                    <h2 className="text-black">
                      I had the opportunity to intern as a web developer specializing in WordPress at the Mathematics Department of As-Syafi'iyah Islamic University in Jakarta. During this internship, I diligently worked on various
                      projects, ensuring timely and accurate completion of all tasks assigned to me. My commitment to excellence and punctuality was reflected in the quality of my work and my ability to meet deadlines consistently.
                    </h2>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">Jun 2024 - Sep 2024</time>
                    <div className="text-lg font-black">Full Stack Developer</div>
                    <h2 className="text-black">
                      As a Full Stack Developer intern at PT. Sinergi Jaya Rahayu from June to September 2024, I contributed to Business Process System Development, taking on roles as a UI Designer, Front-End Developer, and Back-End
                      Developer. My responsibilities included designing intuitive and responsive user interfaces, developing front-end applications with modern web technologies to ensure optimal performance, and managing back-end logic and
                      databases to support seamless system functionality. This experience enhanced my skills in UI/UX design, front-end and back-end development, and integrating efficient business systems.
                    </h2>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start md:text-end">
                    <time className="font-mono italic">Nov 2023 - Jan 2025</time>
                    <div className="text-lg font-black">Frontend Developer</div>
                    <h2 className="text-black">
                      As a Front-End Developer at IEEE Telkom University Student Branch from November 2023 to January 2025, I am responsible for designing and developing user-friendly, responsive web interfaces. My role involves
                      implementing modern front-end technologies to enhance user experience, optimizing web performance, and ensuring seamless integration with back-end systems. Through this position, I have strengthened my skills in UI/UX
                      design, front-end development, and building scalable web applications.
                    </h2>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">2007</time>
                    <div className="text-lg font-black">iPhone</div>
                    iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has
                    annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2015</time>
                    <div className="text-lg font-black">Apple Watch</div>
                    The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and
                    services
                  </div>
                </li>
              </ul>
            </div>
            {/*end of list of working */}
          </div>
        </div>
      </div>
      {/*end of working experience section */}
    </div>
  );
};

export default Landing;
