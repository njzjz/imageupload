var url=new URL(location.href);
if(url.searchParams.get("alreadyauth")!="1"){
  location.replace("https://app.njzjz.win/imageupload");
}
