function myLink(link) {
 
  const linkInfo = link == "myGit" ? "https://github.com/Pryan1k023" :
  link == "mySyte" ? "https://pryan1k023.github.io/pryan1k-syte/" :
  link == "mySol" ? "https://www.sololearn.com/ru/profile/25516665" :
  link == "myVk" ? "https://vk.com/maksimka023" :
  "";
  window.open(linkInfo, '_blank').focus();
}