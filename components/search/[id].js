import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'
import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'
import { useNavigation } from '@react-navigation/native'
const JobSearch = () => {
const navigation=useNavigation()
const [searchResult, setSearchResult] = useState([]);
const [searchLoader, setSearchLoader] = useState(false);
const [searchError, setSearchError] = useState(null);
const [page, setPage] = useState(1);
const handleSearch = async () => {
setSearchLoader(true);
setSearchResult([])
try {
const options = {
method: "GET",
url: `https://jsearch.p.rapidapi.com/search`,
headers: {
"X-RapidAPI-Key": '93915e3c5fmsh7329a9866d234f3p14b28ejsn8f6d430307d5',
"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
},
params: {
 query: 123,
page: page.toString(),
},
};
const response = await axios.request(options);
console.log(response.data.data,'dataaa')
setSearchResult(response.data.data);
} catch (error) {
setSearchError(error);
console.log(error);
} finally {
setSearchLoader(false);
}
};
const handlePagination = (direction) => {
if (direction === 'left' && page > 1) {
setPage(page - 1)
handleSearch()
} else if (direction === 'right') {
setPage(page + 1)
handleSearch()
}
}
useEffect(() => {
handleSearch()
}, [])
return (
<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

<FlatList
data={searchResult}
renderItem={({ item }) => (
<NearbyJobCard
job={item}
handleNavigate={() => navigation.navigate(`/job-details/${item.job_id}`)}
/>
)}
keyExtractor={(item) => item.job_id}
contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}


/>
</SafeAreaView>
)
}
export default JobSearch
