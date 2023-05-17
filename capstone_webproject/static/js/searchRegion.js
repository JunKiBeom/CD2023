// "시/도" 선택 시 해당 시의 "시/구/군" 옵션을 동적으로 변경
const citySelect = document.getElementById("city");
const districtSelect = document.getElementById("district");
const addressselect = document.getElementById("address")

citySelect.addEventListener("change", function() {
    const city = citySelect.value;
    if (city === "서울시") {
        districtSelect.innerHTML = `
        <option value="강남구">강남구</option>
        <option value="강동구">강동구</option>
        <option value="강북구">강북구</option>
        <option value="강서구">강서구</option>
        <option value="관악구">관악구</option>
        <option value="광진구">광진구</option>
        <option value="구로구">구로구</option>
        <option value="금천구">금천구</option>
        <option value="노원구">노원구</option>
        <option value="도봉구">도봉구</option>
        <option value="동대문구">동대문구</option>
        <option value="동작구">동작구</option>
        <option value="마포구">마포구</option>
        <option value="서대문구">서대문구</option>
        <option value="서초구">서초구</option>
        <option value="성동구">성동구</option>
        <option value="성북구">성북구</option>
        <option value="송파구">송파구</option>
        <option value="양천구">양천구</option>
        <option value="영등포구">영등포구</option>
        <option value="용산구">용산구</option>
        <option value="은평구">은평구</option>
        <option value="종로구">종로구</option>
        <option value="중구">중구</option>
        <option value="중랑구">중랑구</option>
    `;
        if (districtSelect.value === "강남구") {
            addressselect.innerHTML = `
        <option value="개포동">개포동</option>
        <option value="논현동">논현동</option>
        <option value="대치동">대치동</option>
        <option value="도곡동">도곡동</option>
        <option value="삼성동">삼성동</option>
        <option value="세곡동">세곡동</option>
        <option value="수서동">수서동</option>
        <option value="신사동">신사동</option>
        <option value="압구정동">압구정동</option>
        <option value="역삼동">역삼동</option>
        <option value="율현동">율현동</option>
        <option value="일원동">일원동</option>
        <option value="자곡동">자곡동</option>
        <option value="청담동">청담동</option>
        <option value="포이동">포이동</option>
        <option value="학동">학동</option>
        <option value="현림동">현림동</option>
        <option value="현충로">현충로</option>
        <option value="화곡동">화곡동</option>
            `;
        }

        else if (districtSelect.value === "강동구") {
            addressselect.innerHTML = `
        <option value="가나다">가나다</option>
            `;
        }





// 다른 구들에 대한 조건문을 추가로 작성해주세요.

    } else if (city === "대전시") {
        districtSelect.innerHTML = `
        <option value="동구">동구</option>
        <option value="중구">중구</option>
        <option value="서구">서구</option>
        <option value="유성구">유성구</option>
        <option value="대덕구">대덕구</option>
        <!-- 다른 구들을 추가해 주세요 -->
    `;
    } else if (city == "부산시") {
        districtSelect.innerHTML = `
        <option value="강서구">강서구</option>
        <option value="금정구">금정구</option>
        <option value="기장군">기장군</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="동래구">동래구</option>
        <option value="부산진구">부산진구</option>
        <option value="북구">북구</option>
        <option value="사상구">사상구</option>
        <option value="사하구">사하구</option>
        <option value="서구">서구</option>
        <option value="수영구">수영구</option>
        <option value="연제구">연제구</option>
        <option value="영도구">영도구</option>
        <option value="중구">중구</option>
        <option value="해운대구">해운대구</option>
    `;
    } else if (city === "인천시") {
        districtSelect.innerHTML = `
        <option value="강화군">강화군</option>
        <option value="계양구">계양구</option>
        <option value="남구">남구</option>
        <option value="남동구">남동구</option>
        <option value="동구">동구</option>
        <option value="부평구">부평구</option>
        <option value="서구">서구</option>
        <option value="연수구">연수구</option>
        <option value="옹진군">옹진군</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "광주시") {
        districtSelect.innerHTML = `
        <option value="광산구">광산구</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="서구">서구</option>
    `;
    } else if (city === "울산시") {
        districtSelect.innerHTML = `
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="울주군">울주군</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "대구시") {
        districtSelect.innerHTML = `
        <option value="남구">남구</option>
        <option value="달서구">달서구</option>
        <option value="달성군">달성군</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="서구">서구</option>
        <option value="수성구">수성구</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "세종시") {
        districtSelect.innerHTML = `
        <option value="세종시">세종시</option>
    `;
    } else if (city === "경기도") {
        districtSelect.innerHTML = `
        <option value="가평군">가평군</option>
        <option value="고양시 덕양구">고양시 덕양구</option>
        <option value="고양시 일산동구">고양시 일산동구</option>
        <option value="고양시 일산서구">고양시 일산서구</option>
        <option value="과천시">과천시</option>
        <option value="광명시">광명시</option>
        <option value="광주시">광주시</option>
        <option value="구리시">구리시</option>
        <option value="군포시">군포시</option>
        <option value="김포시">김포시</option>
        <option value="남양주시">남양주시</option>
        <option value="동두천시">동두천시</option>
        <option value="부천시 소사구">부천시 소사구</option>
        <option value="부천시 오정구">부천시 오정구</option>
        <option value="부천시 원미구">부천시 원미구</option>
        <option value="성남시 분당구">성남시 분당구</option>
        <option value="성남시 수정구">성남시 수정구</option>
        <option value="성남시 중원구">성남시 중원구</option>
        <option value="수원시 권선구">수원시 권선구</option>
        <option value="수원시 영통구">수원시 영통구</option>
        <option value="수원시 장안구">수원시 장안구</option>
        <option value="수원시 팔달구">수원시 팔달구</option>
        <option value="시흥시">시흥시</option>
        <option value="안산시 단원구">안산시 단원구</option>
        <option value="안산시 상록구">안산시 상록구</option>
        <option value="안성시">안성시</option>
        <option value="안양시 동안구">안양시 동안구</option>
        <option value="안양시 만안구">안양시 만안구</option>
        <option value="양주시">양주시</option>
        <option value="양평군">양평군</option>
        <option value="여주군">여주군</option>
        <option value="연천군">연천군</option>
        <option value="오산시">오산시</option>
        <option value="용인시 기흥구">용인시 기흥구</option>
        <option value="용인시 수지구">용인시 수지구</option>
        <option value="용인시 처인구">용인시 처인구</option>
        <option value="의왕시">의왕시</option>
        <option value="의정부시">의정부시</option>
        <option value="이천시">이천시</option>
        <option value="파주시">파주시</option>
        <option value="평택시">평택시</option>
        <option value="하남시">하남시</option>
        <option value="화성시">화성시</option>
    `;
    } else if (city === "강원도") {
        districtSelect.innerHTML = `
        <option value="강릉시">강릉시</option>
        <option value="고성군">고성군</option>
        <option value="동해시">동해시</option>
        <option value="삼척시">삼척시</option>
        <option value="속초시">속초시</option>
        <option value="양구군">양구군</option>
        <option value="양양군">양양군</option>
        <option value="영월군">영월군</option>
        <option value="원주시">원주시</option>
        <option value="인제군">인제군</option>
        <option value="정선군">정선군</option>
        <option value="철원군">철원군</option>
        <option value="춘천시">춘천시</option>
        <option value="태백시">태백시</option>
        <option value="평창군">평창군</option>
        <option value="홍천군">홍천군</option>
        <option value="화천군">화천군</option>
        <option value="횡성군">횡성군</option>
    `;
    } else if (city === "충청북도") {
        districtSelect.innerHTML = `
        <option value="괴산군">괴산군</option>
        <option value="단양군">단양군</option>
        <option value="보은군">보은군</option>
        <option value="영동군">영동군</option>
        <option value="옥천군">옥천군</option>
        <option value="음성군">음성군</option>
        <option value="제천시">제천시</option>
        <option value="증평군">증평군</option>
        <option value="진천군">진천군</option>
        <option value="청주시 상당구">청주시 상당구</option>
        <option value="청주시 서원구">청주시 서원구</option>
        <option value="청주시 청원구">청주시 청원구</option>
        <option value="청주시 흥덕구">청주시 흥덕구</option>
        <option value="충주시">충주시</option>
    `;
    } else if (city === "충청남도") {
        districtSelect.innerHTML = `
        <option value="계룡시">계룡시</option>
        <option value="공주시">공주시</option>
        <option value="금산군">금산군</option>
        <option value="논산시">논산시</option>
        <option value="당진시">당진시</option>
        <option value="보령시">보령시</option>
        <option value="부여군">부여군</option>
        <option value="서산시">서산시</option>
        <option value="서천군">서천군</option>
        <option value="아산시">아산시</option>
        <option value="예산군">예산군</option>
        <option value="천안시 동남구">천안시 동남구</option>
        <option value="천안시 서북구">천안시 서북구</option>
        <option value="청양군">청양군</option>
        <option value="태안군">태안군</option>
        <option value="홍성군">홍성군</option>
    `;
    } else if (city === "전라북도") {
        districtSelect.innerHTML = `
        <option value="고창군">고창군</option>
        <option value="군산시">군산시</option>
        <option value="김제시">김제시</option>
        <option value="남원시">남원시</option>
        <option value="무주군">무주군</option>
        <option value="부안군">부안군</option>
        <option value="순창군">순창군</option>
        <option value="완주군">완주군</option>
        <option value="익산시">익산시</option>
        <option value="임실군">임실군</option>
        <option value="장수군">장수군</option>
        <option value="Jeonju-si">전주시</option>
        <option value="정읍시">정읍시</option>
        <option value="진안군">진안군</option>
    `;
    } else if (city === "전라남도") {
        districtSelect.innerHTML = `
        <option value="강진군">강진군</option>
        <option value="고흥군">고흥군</option>
        <option value="곡성군">곡성군</option>
        <option value="광양시">광양시</option>
        <option value="구례군">구례군</option>
        <option value="나주시">나주시</option>
        <option value="담양군">담양군</option>
        <option value="목포시">목포시</option>
        <option value="무안군">무안군</option>
        <option value="보성군">보성군</option>
        <option value="순천시">순천시</option>
        <option value="신안군">신안군</option>
        <option value="여수시">여수시</option>
        <option value="영광군">영광군</option>
        <option value="영암군">영암군</option>
        <option value="완도군">완도군</option>
        <option value="장성군">장성군</option>
        <option value="장흥군">장흥군</option>
        <option value="진도군">진도군</option>
        <option value="함평군">함평군</option>
        <option value="해남군">해남군</option>
        <option value="화순군">화순군</option>
    `;
    } else if (city === "경상북도") {
        districtSelect.innerHTML = `
        <option value="경산시">경산시</option>
        <option value="경주시">경주시</option>
        <option value="고령군">고령군</option>
        <option value="구미시">구미시</option>
        <option value="군위군">군위군</option>
        <option value="김천시">김천시</option>
        <option value="문경시">문경시</option>
        <option value="봉화군">봉화군</option>
        <option value="상주시">상주시</option>
        <option value="성주군">성주군</option>
        <option value="안동시">안동시</option>
        <option value="영덕군">영덕군</option>
        <option value="영양군">영양군</option>
        <option value="영주시">영주시</option>
        <option value="영천시">영천시</option>
        <option value="예천군">예천군</option>
        <option value="울릉군">울릉군</option>
        <option value="울진군">울진군</option>
        <option value="의성군">의성군</option>
        <option value="청도군">청도군</option>
        <option value="청송군">청송군</option>
        <option value="칠곡군">칠곡군</option>
        <option value="포항시 남구">포항시 남구</option>
        <option value="포항시 북구">포항시 북구</option>
    `;
    } else if (city === "경상남도") {
        districtSelect.innerHTML = `
        <option value="거제시">거제시</option>
        <option value="거창군">거창군</option>
        <option value="고성군">고성군</option>
        <option value="김해시">김해시</option>
        <option value="남해군">남해군</option>
        <option value="밀양시">밀양시</option>
        <option value="사천시">사천시</option>
        <option value="산청군">산청군</option>
        <option value="양산시">양산시</option>
        <option value="의령군">의령군</option>
        <option value="진주시">진주시</option>
        <option value="창녕군">창녕군</option>
        <option value="창원시 마산합포구">창원시 마산합포구</option>
        <option value="창원시 마산회원구">창원시 마산회원구</option>
        <option value="창원시 성산구">창원시 성산구</option>
        <option value="창원시 의창구">창원시 의창구</option>
        <option value="창원시 진해구">창원시 진해구</option>
        <option value="통영시">통영시</option>
        <option value="하동군">하동군</option>
        <option value="함안군">함안군</option>
        <option value="함양군">함양군</option>
        <option value="합천군">합천군</option>
    `;
    } else if (city === "제주도") {
        districtSelect.innerHTML = `
        <option value="서귀포시">서귀포시</option>
        <option value="제주시">제주시</option>
    `;
    } else {
        districtSelect.innerHTML = `<option value="">구/군 선택</option>`;
    }
})

districtSelect.addEventListener("change", function() {
    // 서울시
    const district = districtSelect.value;
    if (district === "강남구") {
        addressselect.innerHTML = `
        <option value="개포동">개포동</option>
        <option value="논현동">논현동</option>
        <option value="대치동">대치동</option>
        <option value="도곡동">도곡동</option>
        <option value="삼성동">삼성동</option>
        <option value="세곡동">세곡동</option>
        <option value="수서동">수서동</option>
        <option value="신사동">신사동</option>
        <option value="압구정동">압구정동</option>
        <option value="역삼동">역삼동</option>
        <option value="율현동">율현동</option>
        <option value="일원동">일원동</option>
        <option value="자곡동">자곡동</option>
        <option value="청담동">청담동</option>
        <option value="포이동">포이동</option>
        <option value="학동">학동</option>
        <option value="현림동">현림동</option>
        <option value="현충로">현충로</option>
        <option value="화곡동">화곡동</option>
            <!-- 다른 동들을 추가해 주세요 -->
        `;
    } else if (district === "강동구") {
        addressselect.innerHTML = `
        <option value="강일동">강일동</option>
        <option value="고덕동">고덕동</option>
        <option value="길동">길동</option>
        <option value="둔촌동">둔촌동</option>
        <option value="명일동">명일동</option>
        <option value="상일동">상일동</option>
        <option value="성내동">성내동</option>
        <option value="성수동">성수동</option>
        <option value="암사동">암사동</option>
        <option value="천호동">천호동</option>
        `;
    } else if (district === "강북구") {
    addressselect.innerHTML = `
    <option value="미아동">미아동</option>
    <option value="번동">번동</option>
    <option value="수유동">수유동</option>
    <option value="삼각산동">삼각산동</option>
    <option value="송중동">송중동</option>
    <option value="송천동">송천동</option>
    <option value="인수동">인수동</option>
    <option value="월계동">월계동</option>
    <option value="월북동">월북동</option>
    <option value="장위동">장위동</option>

    `;
    } else if (district === "강서구") {
        addressselect.innerHTML = `
        <option value="가양동">가양동</option>
        <option value="개화동">개화동</option>
        <option value="공항동">공항동</option>
        <option value="과해동">과해동</option>
        <option value="내발산동">내발산동</option>
        <option value="등촌동">등촌동</option>
        <option value="마곡동">마곡동</option>
        <option value="방화동">방화동</option>
        <option value="염창동">염창동</option>
        <option value="오곡동">오곡동</option>
        <option value="외발산동">외발산동</option>
        <option value="화곡동">화곡동</option>

        `;
    } else if (district === "관악구") {
        addressselect.innerHTML = `
        <option value="낙성대동">낙성대동</option>
        <option value="난곡동">난곡동</option>
        <option value="난향동">난향동</option>
        <option value="난우중동">난우중동</option>
        <option value="난향동">난향동</option>
        <option value="난포동">난포동</option>
        <option value="대학동">대학동</option>
        <option value="미성동">미성동</option>
        <option value="보라매동">보라매동</option>
        <option value="봉천동">봉천동</option>
        <option value="삼성동">삼성동</option>
        <option value="서림동">서림동</option>
        <option value="서원동">서원동</option>
        <option value="신림동">신림동</option>
        <option value="신사동">신사동</option>
        <option value="신원동">신원동</option>
        <option value="은천동">은천동</option>
        <option value="인헌동">인헌동</option>
        <option value="조원동">조원동</option>
        <option value="중앙동">중앙동</option>
        <option value="청룡동">청룡동</option>
        <option value="청림동">청림동</option>
        <option value="행운동">행운동</option>
        <option value="흑석동">흑석동</option>

        `;
    } else if (district === "광진구") {
        addressselect.innerHTML = `
        <option value="광장동">광장동</option>
        <option value="구의동">구의동</option>
        <option value="군자동">군자동</option>
        <option value="능동">능동</option>
        <option value="자양동">자양동</option>
        <option value="중곡동">중곡동</option>
        <option value="화양동">화양동</option>

        `;
    } else if (district === "구로구") {
        addressselect.innerHTML = `
        <option value="가리봉동">가리봉동</option>
        <option value="개봉동">개봉동</option>
        <option value="고척동">고척동</option>
        <option value="구로동">구로동</option>
        <option value="궁동">궁동</option>
        <option value="신도림동">신도림동</option>
        <option value="오류동">오류동</option>
        <option value="온수동">온수동</option>
        <option value="천왕동">천왕동</option>
        <option value="항동">항동</option>

        `;
    } else if (district === "금천구") {
        addressselect.innerHTML = `
        <option value="가산동">가산동</option>
        <option value="독산동">독산동</option>
        <option value="시흥동">시흥동</option>
        `;
    } else if (district === "노원구") {
        addressselect.innerHTML = `

        <option value="공릉동">공릉동</option>
        <option value="상계동">상계동</option>
        <option value="중계동">중계동</option>
        <option value="하계동">하계동</option>
        <option value="월계동">월계동</option>
        `;
    } else if (district === "도봉구") {
        addressselect.innerHTML = `

        <option value="가산동">도봉동</option>
        <option value="가산동">방학동</option>
        <option value="가산동">쌍문동</option>
        <option value="가산동">창동</option>
        `;
    } else if (district === "동대문구") {
        addressselect.innerHTML = `
        // 동대문구에 해당하는 코드 내용
        `;
    } else if (district === "동작구") {
        addressselect.innerHTML = `
        // 동작구에 해당하는 코드 내용
        `;
    } else if (district === "마포구") {
        addressselect.innerHTML = `
        // 마포구에 해당하는 코드 내용
        `;
    } else if (district === "서대문구") {
        addressselect.innerHTML = `
        // 서대문구에 해당하는 코드 내용
        `;
    } else if (district === "서초구") {
        addressselect.innerHTML = `
        // 서초구에 해당하는 코드 내용
        `;
    } else if (district === "성동구") {
        addressselect.innerHTML = `
        // 성동구에 해당하는 코드 내용
        `;
    } else if (district === "성북구") {
        addressselect.innerHTML = `
        // 성북구에 해당하는 코드 내용
        `;
    } else if (district === "송파구") {
        addressselect.innerHTML = `
        // 송파구에 해당하는 코드 내용
        `;
    } else if (district === "양천구") {
        addressselect.innerHTML = `
        // 양천구에 해당하는 코드 내용
        `;
    } else if (district === "영등포구") {
        addressselect.innerHTML = `
        // 영등포구에 해당하는 코드 내용
        `;
    } else if (district === "용산구") {
        addressselect.innerHTML = `
        // 용산구에 해당하는 코드 내용
        `;
    } else if (district === "은평구") {
        addressselect.innerHTML = `
        // 은평구에 해당하는 코드 내용
        `;
    } else if (district === "종로구") {
        addressselect.innerHTML = `
        // 종로구에 해당하는 코드 내용
        `;
    } else if (district === "중구") {
        addressselect.innerHTML = `
        // 중구에 해당하는 코드 내용
        `;
    } else if (district === "중랑구") {
        addressselect.innerHTML = `
        // 중랑구에 해당하는 코드 내용
        `;
    }


    // 다른 구에 대한 조건문을 추가로 작성해 주세요.
});

// // "검색" 버튼 클릭 시 주소 검색 수행
// const searchBtn = document.getElementById("searchBtn");
// searchBtn.addEventListener("click", function() {
//     const city = citySelect.value;
//     const district = districtSelect.value;
//     const address = document.getElementById("address").value;
//
//     const result = city + " " + district + " " + address
//     console.log(result)
//
// })

// 주소 검색을 수행하는 코드를 추가해 주세요
// 예: window.location.href = `/search?city=${city}&district=${district}`;
