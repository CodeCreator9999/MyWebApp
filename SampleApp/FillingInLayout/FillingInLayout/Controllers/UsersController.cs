using Microsoft.AspNetCore.Mvc;
using FillinginLayout.Data;
using FillinginLayout.Models;

namespace FillinginLayout.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("signup")]
        public IActionResult Signup([FromBody] SignupRequest request)
        {
            var user = new User
            {
                Name = request.Name,
                Email = request.Email,
                PasswordDigest = request.Password,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(new { message = "User created successfully" });
        }
    }
}