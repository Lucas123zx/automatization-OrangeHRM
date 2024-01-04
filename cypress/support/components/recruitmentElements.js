
class RecruitmentElements {
  buttonCandidates = () => {return "//a[normalize-space()='Candidates']"}
  buttonVacancies = () => {return "li[class='oxd-topbar-body-nav-tab']"}
  buttonAddCandidates = () => {return "//button[normalize-space()='Add']"}
  table = () => {return "div[role='table']"}
}

module.exports = new RecruitmentElements()