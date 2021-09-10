
 import { makeStyles, createStyles, CircularProgress, Avatar, Typography } from '@material-ui/core';
// import React from 'react';
// //import {CardList} from './stories/CardList';
// //import VideoCard from "..../../../src/stories/Card/VideoCard";
// //import SectionHeader  from "..../../../src/stories/SectionHeader/SectionHeader";
// import { useEffect } from 'react';
// import { useQuery } from '@apollo/client';
// import { CONTENTS } from './api/queries';
// import { Contents,Contents_contents_nodes } from './api/__generated__/Contents';

// const FeedPageStyles = makeStyles(
//   createStyles({
//     header: {
//         position: 'sticky'
//     },
//     page: {
//         padding: '20px'
//     }
// }));

// export interface FeedPageProps {
//   pageTitle: string;
// }

// const FeedPage = ({ pageTitle }: FeedPageProps): JSX.Element => {
//   const [cards, setCards] = React.useState<JSX.Element[]>([]);
  
//   const {loading, error, data} = useQuery<Contents>(CONTENTS)
//   const styles = FeedPageStyles();

//     useEffect(() => {
//         if(!loading && !error) {
//             setCards(data!.contents!.nodes!.map((content : Contents_contents_nodes) => {
//                 return <VideoCard 
//                     avatar={<Avatar>{content.viewer.name[0]}</Avatar>}
//                     cardTitle={content.name}
//                     subHeader={content.viewer.name}
//                     cardContent={<Typography>{content.description}</Typography>}
//                     url={content.link}
//                  />
//             }))
//         }
//     }, [data]);

//     return <div className={styles.page}>
//         <div className={styles.header}>
//             <SectionHeader sectionTitle={pageTitle} doClick={() => { }} />
//         </div>
//         {cards.length === 0 ? <CircularProgress /> : <CardList cards={cards} cols={window.innerWidth / 650} />}
//     </div>
  
// };

// export default FeedPage;
