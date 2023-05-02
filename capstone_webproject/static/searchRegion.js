// 지역을 검색할 수 있도록 하는 곳

// 시 선택 드롭다운 목록의 변경 이벤트를 처리합니다.
document.getElementById('city').addEventListener('change', function() {
    var city = this.value;
    var districtDropdown = document.getElementById('district');
    // 구/군 목록을 초기화합니다.
    districtDropdown.innerHTML = '<option value="">구/군 선택</option>';

    if (city === '서울시') {
        // 서울시에 대한 구 목록을 추가합니다.
        var seoulDistricts = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];
        for (var i = 0; i < seoulDistricts.length; i++) {
            var option = document.createElement('option');
            option.value = seoulDistricts[i];
            option.text = seoulDistricts[i];
            districtDropdown.appendChild(option);
        }
    } else if (city === '대전광역시') {
                // 대전광역시에 대한 구 목록을 추가합니다.
        var daejeonDistricts = ['중구', '동구', '서구', '유성구', '대덕구'];
        for (var i = 0; i < daejeonDistricts.length; i++) {
            var option = document.createElement('option');
            option.value = daejeonDistricts[i];
            option.text = daejeonDistricts[i];
            districtDropdown.appendChild(option);
        }
    }
});

// 검색 버튼 클릭 이벤트를 처리합니다.
document.getElementById('searchBtn').addEventListener('click', function() {
    var city = document.getElementById('city').value;
    var district = document.getElementById('district').value;

    if (city && district) {
        // 선택한 시와 구/군 정보를 사용하여 검색을 수행합니다.
        // 검색 결과 페이지로 이동하거나, AJAX 요청을 통해 검색 결과를 가져올 수 있습니다.
        // 필요한 로직을 추가하세요.
    } else {
        alert('시와 구/군을 선택해 주세요.');
    }
});

