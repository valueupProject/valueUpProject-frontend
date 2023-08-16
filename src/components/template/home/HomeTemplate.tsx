import { useRouter } from 'next/router';

import * as style from '@/components/template/home/HomeTemplate.style';
import PlaylistBox from '@/components/pages/home/playlist-box';
import { PlaylistType } from '~/src/constants/types/playlistTypes';

interface HomeTemplateProps {
  whenPlaylistWillPlay: string;
  isTimeBadgeVisible: boolean;
  
  isPlaylistAvailable: boolean;
  isEditMode: boolean;
  onClickIsEditMode : () => void;
  TestPlayListData : PlaylistType[]; //나중에 객체담은 배열로 바꿔야할듯
  
}


export const HomeTemplate = ({
  whenPlaylistWillPlay,
  isTimeBadgeVisible,
  
  isPlaylistAvailable,
  isEditMode,
  onClickIsEditMode,
  TestPlayListData,
}: HomeTemplateProps) => {
  
  const router = useRouter();
  const currentFirstPath = router.pathname.split('/')[1];
  const onClickAddPlaylistButton = () => {
  console.log("애드버튼 누름",TestPlayListData); 
  router.push(`${currentFirstPath}/timesetting`);
  }
  
  return (
    <style.Container>

     { isPlaylistAvailable? 
     <style.ShowPlaylist>
      <style.MainIcon/>
      <style.EditDiv>
      { !isEditMode?
      <style.Button
       onClick = {onClickIsEditMode}
       isEditMode={isEditMode}
      >편집</style.Button> : 
      <style.Button
       onClick = {onClickIsEditMode}
       isEditMode={isEditMode}
      >취소</style.Button> }
      </style.EditDiv>
      {TestPlayListData.map((playlist:PlaylistType,index:number) => (
      <PlaylistBox
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isTimeBadgeVisible={isTimeBadgeVisible}
        isEditMode ={isEditMode}
        key={index}
        playlist={playlist}
        
        /> 
      ))}
      </style.ShowPlaylist>
      : 
       <style.SuggestAddPlaylist>콤마 플레이리스트가 없어요.</style.SuggestAddPlaylist>
      }
      { !isEditMode?
      <style.AddPlaylistButton onClick ={onClickAddPlaylistButton}/> : <style.DeletePlaylistButton/>
      }
      
    </style.Container>
  );
};
