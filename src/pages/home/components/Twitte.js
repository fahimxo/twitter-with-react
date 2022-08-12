import React,{useContext} from "react";
import useStyle from "../styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { likeTwitte, setTwitte } from "../../../context/twitteContext";
import { twitteDispatchContext } from "../../../context/twitteContext";
import { likeTwitteReq } from "../../../components/api/api-twittes";


const Twitte = ({ data }) => {
  const classes = useStyle();
  const dispatch=useContext(twitteDispatchContext)

  const renderTwitte = (text) => {
    return text.replace(
      /#\S+/g,
      '<a href="/tag/$&" style="color:cornflowerblue">$&</a>'
    );
  };
  const setImage = () => {
    if (data.user.image) return data.user.image;
    return "/images/user.png";
  };
  const reTwitte = () => {
    setTwitte(dispatch,data.text)
  };
  const handelLike = () => {
    likeTwitteReq(data._id,(isok,data)=>{
        if(isok){
            console.log(data);
            likeTwitte(dispatch,data._id)
        }else{
            console.log(data);
        }
    })

  };

  return (<>
  
    <div className={classes.TwitteItem}>
      <Grid container className={classes.TwitteHeader}>
        <img className={classes.profImg} src={setImage()} alt="user" />
        <Typography className={classes.userName}>{data.user.name}</Typography>
        <Typography className={classes.userId}>
          @{data.user.username}
        </Typography>
      </Grid>
      <Grid container className={classes.twitteContent}>
        <Typography
          dangerouslySetInnerHTML={{ __html: renderTwitte(data.text) }}
          className={classes.twitteText}
        />
        {data.image ? (
          <div className={classes.twitteImgWrapper}>
            <div
              className={classes.twitteImg}
              style={{ backgroundImage: `url(${data.image})` }}
            ></div>
          </div>
        ) : null}
      </Grid>
      <Grid
        container
        direction="row-reverse"
        alignItems="center"
        className={classes.controlbtns}
      >
        <IconButton className={classes.btns} onClick={reTwitte}>
          <RepeatIcon />
        </IconButton>

        <IconButton className={classes.btns} onClick={handelLike}>
          <FavoriteIcon className={classes.favIcon} />
        </IconButton>

        <Typography className={classes.userId}>{data.likes}</Typography>
        <Typography className={classes.userId}>{data.date}</Typography>
      </Grid>

    </div>
    </>
  );
};

export default Twitte;
