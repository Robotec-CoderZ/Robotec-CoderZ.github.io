function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lzMVt09aJR":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var query = window.location.search.substring(7);
player.SetVar("JumpToSlide",query);
}

