function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QZ0ANR17p7":
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

