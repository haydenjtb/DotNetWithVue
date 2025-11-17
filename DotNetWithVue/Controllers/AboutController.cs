using Microsoft.AspNetCore.Mvc;

namespace DotNetWithVue.Controllers;

public class AboutController : Controller
{
    private readonly ILogger<AboutController> _logger;
    
    public AboutController(ILogger<AboutController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        HomeController.ViewModel model = new()
        {
            page = "about"
        };
        return View(model);
    }
}