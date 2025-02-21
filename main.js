// <!-- Alert is from 3wschools -->
function calculateAB() {
            var A = document.getElementById('inputA').value * 1;
            var B = document.getElementById('inputB').value * 1;
            var C = A * B;
        alert('The answer is: ' + C.toFixed(2));
        }

        function calculateDivision() {
            var A = document.getElementById('inputA').value * 1;
            var B = document.getElementById('inputB').value * 1;
            var ans = B / A;
            alert('The answer is: ' + ans.toFixed(2));
        }

        function calculateRemainder() {
            var A = document.getElementById('inputA').value * 1;
            var B = document.getElementById('inputB').value * 1;
            var ans = B % A;
        alert('The remainder is: ' + ans);
        }

        function checkEquality() {
            var A = document.getElementById('inputA').value * 1;
            var B = document.getElementById('inputB').value * 1;
        alert(A === B ? 'A and B are equal!' : 'A and B are not equal.');
        }