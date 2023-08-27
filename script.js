let currentInput = "";
        let currentOperator = "";
        let storedValue = "";

        function appendNumber(number) {
            currentInput += number;
            document.getElementById("result").value = currentInput;
        }

        function appendOperator(operator) {
            if (currentInput !== "") {
                if (storedValue === "") {
                    storedValue = currentInput;
                } else {
                    calculateResult();
                }
                currentOperator = operator;
                currentInput = "";
            }
        }

        function calculateResult() {
            if (currentInput !== "") {
                let result = 0;
                switch (currentOperator) {
                    case "+":
                        result = parseFloat(storedValue) + parseFloat(currentInput);
                        break;
                    case "-":
                        result = parseFloat(storedValue) - parseFloat(currentInput);
                        break;
                    case "*":
                        result = parseFloat(storedValue) * parseFloat(currentInput);
                        break;
                    case "/":
                        result = parseFloat(storedValue) / parseFloat(currentInput);
                        break;
                }
                document.getElementById("result").value = result;
                storedValue = result;
                currentInput = "";
                currentOperator = "";
            }
        }

        function clearResult() {
            currentInput = "";
            currentOperator = "";
            storedValue = "";
            document.getElementById("result").value = "";
        }