// "검색" 버튼 클릭 시 주소 검색 수행
function searchBtn(){
    const city = citySelect.value;
    const district = districtSelect.value;
    const address = document.getElementById("address").value;

    const result = city + " " + district + " " + address
    console.log(result)
    return result
}