var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // type : 'bar' = 막대차트를 의미합니다.
            type: 'bar', //
            data: {
                labels: ['감','오렌지','사과'],
                datasets: [{
                    label: '과일 판매량',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [2 ,10, 5,]
                }]
            },
        });