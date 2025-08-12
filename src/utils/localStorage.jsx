const employees = [
    {
        id: "emp001",
        firstname: "Amit",
        email: "amit@company.in",
        password: "123",
        taskNumber: {
            accepted: 1,
            newTask: 1,
            completed: 2,
            failed: 0
        },
        tasks: [
            {
                taskTitle: "Prepare Sales Report",
                taskDescription: "Generate monthly sales report.",
                taskDate: "2025-06-20",
                category: "Reporting",
                accepted: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Client Meeting",
                taskDescription: "Meet client to discuss project requirements.",
                taskDate: "2025-06-22",
                category: "Meetings",
                accepted: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Update CRM",
                taskDescription: "Input latest client data into CRM.",
                taskDate: "2025-06-18",
                category: "Data Entry",
                accepted: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Market Analysis",
                taskDescription: "Prepare a market research document.",
                taskDate: "2025-06-15",
                category: "Research",
                accepted: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: "emp002",
        firstname: "Roshni",
        email: "roshni@company.in",
        password: "123",
        taskNumber: {
            accepted: 3,
            newTask: 0,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                taskTitle: "Design Mockups",
                taskDescription: "Create UI mockups for the new app feature.",
                taskDate: "2025-06-24",
                category: "Design",
                accepted: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Team Presentation",
                taskDescription: "Present quarterly updates to the team.",
                taskDate: "2025-06-21",
                category: "Presentation",
                accepted: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Review Feedback",
                taskDescription: "Analyze customer feedback for improvements.",
                taskDate: "2025-06-23",
                category: "Research",
                accepted: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Bug Fixes",
                taskDescription: "Resolve UI issues in mobile version.",
                taskDate: "2025-06-19",
                category: "Development",
                accepted: true,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: "emp003",
        firstname: "Kunal",
        email: "kunal@company.in",
        password: "123",
        taskNumber: {
            accepted: 2,
            newTask: 2,
            completed: 0,
            failed: 1
        },
        tasks: [
           
            {
                taskTitle: "Database Optimization",
                taskDescription: "Analyze and optimize database queries for better performance.",
                taskDate: "2025-06-25",
                category: "IT",
                accepted: false,
                newTask: true,
                completed: false,
                failed: false
            },
            
             {
                taskTitle: "Server Maintenance",
                taskDescription: "Perform scheduled maintenance on server.",
                taskDate: "2025-06-20",
                category: "IT",
                accepted: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Security Audit",
                taskDescription: "Check system for vulnerabilities.",
                taskDate: "2025-06-25",
                category: "Security",
                accepted: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Security Patch Update",
                taskDescription: "Install the latest security updates on all servers.",
                taskDate: "2025-06-28",
                category: "IT",
                accepted: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Old Backup Restore",
                taskDescription: "Restore old backup for testing.",
                taskDate: "2025-06-21",
                category: "IT",
                accepted: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: "emp004",
        firstname: "Sneha",
        email: "sneha@company.in",
        password: "123",
        taskNumber: {
            accepted: 2,
            newTask: 0,
            completed: 2,
            failed: 1
        },
        tasks: [
            {
                taskTitle: "Social Media Strategy",
                taskDescription: "Plan next month’s content calendar.",
                taskDate: "2025-06-20",
                category: "Marketing",
                accepted: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Product Launch",
                taskDescription: "Coordinate product launch activities.",
                taskDate: "2025-06-25",
                category: "Operations",
                accepted: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Team Feedback",
                taskDescription: "Collect feedback from team members.",
                taskDate: "2025-06-19",
                category: "HR",
                accepted: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Vendor Meeting",
                taskDescription: "Meet vendor for partnership proposal.",
                taskDate: "2025-06-18",
                category: "Business",
                accepted: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Partnership Review",
                taskDescription: "Review partnership terms.",
                taskDate: "2025-06-15",
                category: "Business",
                accepted: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: "emp005",
        firstname: "Shashi",
        email: "shashi@company.in",
        password: "123",
        taskNumber: {
            accepted: 1,
            newTask: 2,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                taskTitle: "Inventory Check",
                taskDescription: "Update inventory records.",
                taskDate: "2025-06-23",
                category: "Logistics",
                accepted: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Warehouse Inspection",
                taskDescription: "Inspect warehouse safety measures.",
                taskDate: "2025-06-22",
                category: "Safety",
                accepted: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Delivery Schedule",
                taskDescription: "Plan weekly delivery schedule.",
                taskDate: "2025-06-19",
                category: "Logistics",
                accepted: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Damaged Goods Review",
                taskDescription: "Inspect damaged goods for claims.",
                taskDate: "2025-06-15",
                category: "Logistics",
                accepted: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                taskTitle: "New Supplier Search",
                taskDescription: "Find potential new suppliers.",
                taskDate: "2025-06-14",
                category: "Procurement",
                accepted: false,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];

const admin = [
    {
        id: "admin001",
        firstname: "admin",
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin }
}
