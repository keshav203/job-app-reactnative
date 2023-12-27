import React, {useEffect, useState,useMemo} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '../../components';
import {COLORS, SIZES, icons} from '../../constants';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const tabs=['About','Qualifications','Responsibilities']
const JobDetails = ({route}) => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [loading, setLoading] = useState(true);
  const options = useMemo(() => ({
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/job-details',
    params: {
      job_id: route?.params?.id,
      extended_publisher_details: 'false',
    },
    headers: {
      'X-RapidAPI-Key': '93915e3c5fmsh7329a9866d234f3p14b28ejsn8f6d430307d5',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  }), [route?.params?.id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setData(response?.data?.data[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [options]);
  if (loading) {
    return <ActivityIndicator size='large' />
  }
  const displayTabContent=()=>{
    switch(activeTab){
        case "Qualifications":
            return <Specifics 
       title='Qualifications'
       points={data?.job_highlights?.Qualifications ?? ['NA']}
            />
            case "About":
                return <JobAbout
                info={data?.job_description ?? ['N/A']}

                 />
                case "Responsibilities":
               return   <Specifics 
       title='Responsibilities'
       points={data?.job_highlights?.Responsibilities ?? ['NA']}
            />
                    default:
                        break;
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Company
        companyLogo={data?.employer_logo}
        jobTitle={data?.job_title}
        companyName={data?.employer_name}
        location={data?.job_country}
      />

      <JobTabs
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}

      />
{displayTabContent()}
    </SafeAreaView>
  );
};

export default JobDetails;
