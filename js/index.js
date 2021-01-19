const App = {
    data() {
        return {
            newCommand: "",
            position: "/",
            histories: [
                {command: "ls", output: "aaa bbb"},
                {command: "pwd", output: "/"}
            ]
        }
    },
    methods: {
        addHistory () {
            const newHistory = {
                command: this.newCommand,
                output: this.execCommand()
            }
            this.histories.push(newHistory)

            this.newCommand = "";
            document
                .querySelector('footer')
                .scrollIntoView(false);
        },
        parseCommand () {
            // TODO: parse command to separated words
        },
        execCommand () {
            switch (this.newCommand) {
                case "date":
                    return String(new Date());
            }
            return "Command '" + this.newCommand + "' not found"
        }
    }
}

Vue.createApp(App).mount('#app')
