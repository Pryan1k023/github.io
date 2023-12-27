function myLink(link) {
 
  const linkInfo = link == "myGit" ? "https://github.com/Pryan1k023" :
  link == "myVk" ? "https://vk.com/maksimka023" :
  "";
  window.open(linkInfo, '_blank').focus();
}