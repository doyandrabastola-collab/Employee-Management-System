  const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "employee1@gmail.com",
    password: "123",
    taskNumber: 3,
    activeTasks: 2,
    newTasks: 1,
    completedTasks: 2,
    failedTasks: 0,
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage UI",
        taskDescription: "Create a responsive homepage design for the company website.",
        taskDate: "2026-07-20",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Issues",
        taskDescription: "Resolve mobile navigation and alignment problems.",
        taskDate: "2026-07-18",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Develop login page UI with proper form fields.",
        taskDate: "2026-07-15",
        category: "Frontend"
      }
    ]
  },

  {
    id: 2,
    firstname: "Rahul",
    email: "employee2@gmail.com",
    password: "123",
    taskNumber: 4,
    activeTasks: 2,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 1,
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Create database tables and configure connections.",
        taskDate: "2026-07-21",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Development",
        taskDescription: "Develop REST API endpoints for user management.",
        taskDate: "2026-07-22",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test API Routes",
        taskDescription: "Test all API routes using Postman.",
        taskDate: "2026-07-19",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Deployment",
        taskDescription: "Deploy backend server to hosting platform.",
        taskDate: "2026-07-17",
        category: "Deployment"
      }
    ]
  },

  {
    id: 3,
    firstname: "Vikram",
    email: "employee3@gmail.com",
    password: "123",
    taskNumber: 3,
    activeTasks: 3,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 0,
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin dashboard with charts and reports.",
        taskDate: "2026-07-23",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Authentication",
        taskDescription: "Implement user authentication functionality.",
        taskDate: "2026-07-24",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Documentation",
        taskDescription: "Write documentation for project features.",
        taskDate: "2026-07-16",
        category: "Documentation"
      }
    ]
  },

  {
    id: 4,
    firstname: "Amit",
    email: "employee4@gmail.com",
    password: "123",
    taskNumber: 3,
    activeTasks: 2,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 0,
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design attractive landing page for marketing.",
        taskDate: "2026-07-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images for faster loading.",
        taskDate: "2026-07-14",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Responsive Testing",
        taskDescription: "Test website on different screen sizes.",
        taskDate: "2026-07-26",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    firstname: "Rohan",
    email: "employee5@gmail.com",
    password: "123",
    taskNumber: 3,
    activeTasks: 2,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 1,
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "User Research",
        taskDescription: "Collect feedback from users about the product.",
        taskDate: "2026-07-22",
        category: "Research"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Features",
        taskDescription: "Update application features based on requirements.",
        taskDate: "2026-07-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Complete Report",
        taskDescription: "Prepare weekly project progress report.",
        taskDate: "2026-07-18",
        category: "Management"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@gmail.com",
    "password": "123"
  }
];

export function setLocalStorage() {

localStorage.setItem("Employees" , JSON.stringify(employees))
localStorage.setItem("Admin" , JSON.stringify(admin))

}

export function getLocalStorage() {
   const employees =  JSON.parse( localStorage.getItem("Employees"))
   const admin =  JSON.parse( localStorage.getItem("Admin"))

   return {employees,admin}

}

