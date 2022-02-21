let body = document.querySelector("body"),
    control = document.querySelector(".control"),
    projects = document.querySelector(".projects"),
    details = document.querySelector(".details"),
    ul_skills_lists = document.querySelector(".ul_skills_lists"),
    intro = document.querySelector(".intro"),
    skill_active_ul = document.querySelector(".skill_active ul"),
    projects_list = [
      {
        name: "Rest Countries Api",
        img: "cv-images/rest countries api.jpg",
        demo_link:"https://a-mohammed2001.github.io/REST_Countries_Search_API/",
        github_link:"https://github.com/a-mohammed2001/REST_Countries_Search_API",

      },
      {
        name: "Github Users search",
        img: "cv-images/github users search.jpg",
        demo_link:"https://a-mohammed2001.github.io/GitHub-users-search-app/",
        github_link:"https://github.com/a-mohammed2001/GitHub-users-search-app",

      },
      {
        name: "Am furniture",
        img: "cv-images/am-furniture.png",
        demo_link:"https://a-mohammed2001.github.io/Am_Furniture/",
        github_link:"https://github.com/a-mohammed2001/Am_Furniture",
      },
      {
        name: "quran Sound player",
        img: "cv-images/quran_Sound_player.png",
        demo_link:"https://a-mohammed2001.github.io/quran_Sound_player/",
        github_link:"https://github.com/a-mohammed2001/quran_Sound_player",
      },
    ],
    skills_list = [
      {
        name: "Html",
        inner_skills: ["Html5"],
      },
      {
        name: "Css",
        inner_skills: ["Css3", "Sass", "Bootstrap 4"],
      },
      {
        name: "JavaScript",
        inner_skills: ["Dom", "Bom", "Jquery"],
      },
      {
        name: "Json",
        inner_skills: [],
      },
      {
        name: "Ajax",
        inner_skills: [],
      },
      {
        name: "Git",
        inner_skills: [],
      },
    ];
    
projects_map = projects_list
  .map(function (project) {
    return `
  <div class="project">
    <a href="${project.demo_link}" target="_blank">
      <header class="project-header">
        <img src="${project.img}" alt="" />
      </header>
      <div class="project-name"><h3>${project.name}</h3></div>
    </a>
  </div>
  `;
  })
  .join("");
projects.innerHTML = projects_map;

skills_map = skills_list
  .map(function (skill) {
    if (skill.inner_skills.length !== 0) {
      return `
            <div class="skill">
            <span class="skill_header">
              <i class="fas fa-caret-right"></i>
              <h5>${skill.name}</h5>
            </span>           
              <ul>
              <li>${skill.inner_skills.join(`<br>`)}</li>
              </ul>
          </div>
  `;
    } else {
      return `
  <div class="skill">
    <h5>${skill.name}</h5>
  </div>
  `;
    }
  })
  .join("");
ul_skills_lists.innerHTML = skills_map;

ul_skills_lists.addEventListener("click",function (e) {
 
  if (e.target.classList.contains("skill_header")) {
    let skill = e.target.parentElement;

    for (let i = 0; i < skill.parentElement.children.length; i++) {
      if (skill.parentElement.children[i] == skill) {
        continue;
      }
      skill.parentElement.children[i].classList.remove("skill_active");
      
    }
    skill.classList.toggle("skill_active"); 
  }
  else if (e.target.tagName === "H5" || e.target.tagName === "I"){
    let skill =  e.target.parentElement.parentElement;

    for (let i = 0; i < skill.parentElement.children.length; i++) {
      if (skill.parentElement.children[i] == skill) {
        continue;
      }
      skill.parentElement.children[i].classList.remove("skill_active");
     
    }
    skill.classList.toggle("skill_active");
   
  }
});
control.addEventListener("click",function(e) {
  details.classList.toggle("active_details");
  for (let i = 0; i < projects.children.length; i++) {
    projects.children[i].classList.toggle("click_control");
    
  }
});

