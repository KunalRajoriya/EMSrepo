
// -------------8-------------------

const employees = [
    {
        id: "emp001",
        email: "john.doe@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Prepare Sales Report",
                taskDescription: "Generate monthly sales report.",
                taskDate: "2025-06-20",
                category: "Reporting",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Client Meeting",
                taskDescription: "Meet client to discuss project requirements.",
                taskDate: "2025-06-22",
                category: "Meetings",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Update CRM",
                taskDescription: "Input latest client data into CRM.",
                taskDate: "2025-06-18",
                category: "Data Entry",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: "emp002",
        email: "jane.smith@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Design Mockups",
                taskDescription: "Create UI mockups for the new app feature.",
                taskDate: "2025-06-24",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Team Presentation",
                taskDescription: "Present quarterly updates to the team.",
                taskDate: "2025-06-21",
                category: "Presentation",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Review Feedback",
                taskDescription: "Analyze customer feedback for improvements.",
                taskDate: "2025-06-23",
                category: "Research",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Bug Fixes",
                taskDescription: "Resolve UI issues in mobile version.",
                taskDate: "2025-06-19",
                category: "Development",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: "emp003",
        email: "michael.brown@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Server Maintenance",
                taskDescription: "Perform scheduled maintenance on server.",
                taskDate: "2025-06-20",
                category: "IT",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Security Audit",
                taskDescription: "Check system for vulnerabilities.",
                taskDate: "2025-06-25",
                category: "Security",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Backup Data",
                taskDescription: "Create backup of production database.",
                taskDate: "2025-06-21",
                category: "IT",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: "emp004",
        email: "emily.jones@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Social Media Strategy",
                taskDescription: "Plan next month’s content calendar.",
                taskDate: "2025-06-20",
                category: "Marketing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Product Launch",
                taskDescription: "Coordinate product launch activities.",
                taskDate: "2025-06-25",
                category: "Operations",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Team Feedback",
                taskDescription: "Collect feedback from team members.",
                taskDate: "2025-06-19",
                category: "HR",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Vendor Meeting",
                taskDescription: "Meet vendor for partnership proposal.",
                taskDate: "2025-06-18",
                category: "Business",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: "emp005",
        email: "david.wilson@example.com",
        password: "123",
        tasks: [
            {
                taskTitle: "Inventory Check",
                taskDescription: "Update inventory records.",
                taskDate: "2025-06-23",
                category: "Logistics",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Warehouse Inspection",
                taskDescription: "Inspect warehouse safety measures.",
                taskDate: "2025-06-22",
                category: "Safety",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Delivery Schedule",
                taskDescription: "Plan weekly delivery schedule.",
                taskDate: "2025-06-19",
                category: "Logistics",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    }
];

const admin = [
    {
        id: "admin001",
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