const datas = [
  {
    employees: [
      {
        employee_id: 1,
        first_name: "Alice",
        email: "employee1@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Prepare Report",
            taskDate: "2024-10-10",
            taskCategory: "Documentation",
            taskDescription:
              "Prepare the monthly report for the finance department.",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Meeting with Team",
            taskDate: "2024-10-08",
            taskCategory: "Meetings",
            taskDescription: "Discuss quarterly goals with the team.",
          },
          {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            taskTitle: "Code Review",
            taskDate: "2024-10-12",
            taskCategory: "Development",
            taskDescription: "Review the codebase for upcoming deployment.",
          },
        ],
        taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 0,
        },
      },
      {
        employee_id: 2,
        first_name: "Bob",
        email: "employee2@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Client Follow-up",
            taskDate: "2024-10-11",
            taskCategory: "Client Relations",
            taskDescription:
              "Follow up with client regarding project progress.",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Update CRM",
            taskDate: "2024-10-05",
            taskCategory: "Data Management",
            taskDescription: "Update CRM with recent client feedback.",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "Finalize Proposal",
            taskDate: "2024-10-07",
            taskCategory: "Business Development",
            taskDescription: "Complete and send proposal to new client.",
          },
          {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            taskTitle: "Training Session",
            taskDate: "2024-10-13",
            taskCategory: "Training",
            taskDescription: "Attend session on the new CRM system.",
          },
        ],
        taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 1,
        },
      },
      {
        employee_id: 3,
        first_name: "Carol",
        email: "employee3@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Draft Newsletter",
            taskDate: "2024-10-10",
            taskCategory: "Marketing",
            taskDescription: "Create content for the October newsletter.",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Campaign Analysis",
            taskDate: "2024-10-04",
            taskCategory: "Marketing",
            taskDescription: "Analyze last month's social media campaign.",
          },
          {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            taskTitle: "Market Research",
            taskDate: "2024-10-14",
            taskCategory: "Research",
            taskDescription: "Conduct research on current market trends.",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "Product Demo",
            taskDate: "2024-10-06",
            taskCategory: "Product",
            taskDescription: "Prepare demo for new software release.",
          },
        ],
        taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 1,
        },
      },
      {
        employee_id: 4,
        first_name: "David",
        email: "employee4@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "System Backup",
            taskDate: "2024-10-11",
            taskCategory: "IT",
            taskDescription: "Ensure the weekly backup of all systems.",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Bug Fix",
            taskDate: "2024-10-03",
            taskCategory: "Development",
            taskDescription: "Fix known bugs in the recent software update.",
          },
          {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            taskTitle: "Database Cleanup",
            taskDate: "2024-10-15",
            taskCategory: "Data Management",
            taskDescription:
              "Clean and optimize the database for better performance.",
          },
        ],
        taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 0,
        },
      },
      {
        employee_id: 5,
        first_name: "Eve",
        email: "employee5@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Security Audit",
            taskDate: "2024-10-09",
            taskCategory: "Security",
            taskDescription: "Conduct security audit on internal systems.",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Patch Installation",
            taskDate: "2024-10-06",
            taskCategory: "Maintenance",
            taskDescription: "Install latest security patches.",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "System Update",
            taskDate: "2024-10-07",
            taskCategory: "Maintenance",
            taskDescription: "Update internal systems to latest version.",
          },
        ],
        taskNumbers: {
          active: 1,
          newTask: 1,
          completed: 1,
          failed: 1,
        },
      },
    ],
    admin: {
      employee_id: "admin_1",
      first_name: "Admin",
      email: "admin@example.com",
      password: "123",
    },
  },
];

export const setLocalStorage = () => {
  const { employees, admin } = datas[0];
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
