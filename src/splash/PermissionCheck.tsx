import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, PermissionsAndroid, Platform, ScrollView, Text, Touchable, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { getCheckFirstItem, setCheckFirstItem } from '../utills/Storage';
import { PermissionType } from '../utills/Types';
import { baseHeight,baseWidth,DisplayHeight,DisplayWdith } from '../utills/Values';

const Container=styled.View`
  flex: 1;
  align-items: center;
`;
const TopContainer = styled.View`
  align-items: center;
  margin-top: ${baseHeight*100}px;
`;
const LogoImage = styled.Image`
  width: ${baseWidth*25}px;
  height: ${baseHeight*16}px;
  background-color: gray;
  margin-right: ${baseWidth*10}px;
`;
const ExplainText = styled.Text`
  text-align: center;
  font-size: ${baseWidth*13}px;
  color: #333333;
`;
const BaseLine = styled.View`
  margin-right: ${baseWidth*40}px;
  margin-left: ${baseWidth*40}px;
  margin-top: ${baseHeight*41}px;
  background-color: #d7d7d7;
  width: ${DisplayWdith-(baseWidth*80)}px;
  height: ${baseHeight*1}px;
`;
const CenterContainer = styled.View`
  margin-right: ${baseWidth*45}px;
  margin-left: ${baseWidth*45}px;
  margin-top: ${baseHeight*30}px;
`;
const PermissionExplainContainer = styled.View`
  margin-top: ${baseHeight*12.5}px;
  margin-bottom: ${baseHeight*12.5}px;
`;
const BottomContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-top: ${baseHeight*81}px;
  margin-bottom: ${baseHeight*52}px;
`;
const NextTouchableView = styled.TouchableOpacity`
  width: ${baseWidth*338}px;
  height: ${baseHeight*40}px;
  justify-content: center;
  background-color: #1e98d7;
  border-radius: ${baseWidth*8}px;
`;
const NextText = styled.Text`
  color: white;
  font-size: ${baseWidth*14}px;
  align-self: center;

`;

//권한 설명 Component
const DiviviPermissionContainer=({item}:{item:PermissionType})=>{
  return (
    <PermissionExplainContainer>
      <Text style={{fontSize:baseWidth*11,fontWeight:"bold",color:"black"}}>{item.title}</Text>
      <Text style={{fontSize:baseWidth*11}}>{item.text}</Text>
    </PermissionExplainContainer>
  )
}

//권환 확인 func
const checkPermission= async (navi:any)=>{
  if(Platform.OS=="android"){
    try{
      await PermissionsAndroid.requestMultiple([
       PermissionsAndroid.PERMISSIONS.CAMERA,
       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
       PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE ,
       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
       ]
     ).then((result:any)=>{
       //다중 권한이면 result 가 array 형태로 각각 권한에 대한 결과를 return 함
       if (result['android.permission.CAMERA'] === 'granted' ||
       result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'
       ) {
           console.log("모든 권한 획득");
       } else{
           console.log("권한거절");
       }
 
       //권한이 전부 선택 권한이기 떄문에 승인을 하던 거절을 하던 일단 통과시켜야한다.
       //권한 확인 후에는 로그인 화면으로 이동.
       setCheckFirstItem(true);
       navi.reset({routes:[{name : "Login"}]})
     });
 
   } catch (err) {
     console.warn(err)
   }
  }else if(Platform.OS=="ios"){
    //TODO:  IOS 권한 설정 


  }else{
    //그 외..그냥 통과?



  }
  
}



export const PermissionScreen = () => {
  const navi:any=useNavigation();
  
  //권한 설명 text 
  const permissionExplaintext : Array<PermissionType>=[{
      title:"카메라 (선택)",
      text : "프로필 사진, 커뮤니티/클럽 포스트 작성, 노래방 동영상 촬영"
    },
    {
      title:"사진/미디어/파일 (선택)",
      text : "프로필 사진, 커뮤니티/클럽 포스트 작성, 채팅 내 공유"
    },
    {
      title:"연락처 (선택)",
      text : "채팅 친구 추가시 전화번호 동기화"
    },
    {
      title:"오디오 (선택)",
      text : "노래방, 라이브 방송"
    },
    {
      title:"위치 정보 (선택)",
      text : "K 백과사전, 채팅에서 위치 정보 전송"
    },

  ]

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container >
        {/* 상단 뷰  */}
        <TopContainer>
          <View style={{flexDirection:"row",marginBottom:baseHeight*8}}>
            <LogoImage  source={{uri:"../../images/permissionLogo.png"}}/>
            <ExplainText style={{fontSize:baseWidth*13,color:"#333333"}}>Fantoo</ExplainText>
          </View>
          <ExplainText>{`편리한 서비스 이용을 위해\n 아래 접근 권한을 허용해 주세요`}</ExplainText>
          <BaseLine />
        </TopContainer>
        {/* 중간 뷰 */}
        <CenterContainer>
          {permissionExplaintext.map((item,index)=>{
            return(
             <DiviviPermissionContainer key={index.toString()} item={item} />
            )
          })}
          <Text style={{fontSize:baseWidth*11 , marginTop:baseHeight*29}} >
            {`해당 기능을 이용하실 때 접근 권한 요청을 드리며,\n접근 권한에 대해 허용하지 않아도 기본 서비스의 이용은 가능합니다.`}
          </Text>
        </CenterContainer>
        {/* 하단뷰 */}
        <BottomContainer >
          <NextTouchableView onPress={()=>{checkPermission(navi)}}>
            <NextText>Next</NextText>
          </NextTouchableView>
        </BottomContainer>
      </Container>
    </ScrollView>
  );
};
