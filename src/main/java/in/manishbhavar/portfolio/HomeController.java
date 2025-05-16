package in.manishbhavar.portfolio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class HomeController {
	@GetMapping({"/", "", "/home"})
	public String showHomePage() {
		return "home";
	}
	
	@GetMapping("/projects")
	public String showprojectsPage() {
		return "projects";
	}
	
	@GetMapping("/skills")
	public String showskillsPage() {
		return "skills";
	}
	
	@GetMapping("/contact")
	public String showcontactPage() {
		return "contact";
	}

}
