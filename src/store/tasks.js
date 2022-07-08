import { defineStore } from 'pinia'

export const useTasksStore = defineStore({
    state: () => ({
        tasks: [
            {
                id: 1,
                title: 'Hold introductor meeting',
                tags: ['Medium', 'At risk'],
                assignation: {
                    users: [
                        {
                            name: 'John Doe',
                            avatar: '',
                        },
                        {
                            name: 'Jane Doe',
                            avatar: '',
                        },
                    ],
                },
                status: 'Doing',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
        ],
    }),
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter((task) => task.id !== id)
        },
    },
})
