import React, { useContext } from "react";
import {
  ButtonBase,
  Collapse,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import useStyles from "./styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link, useNavigate } from "react-router-dom";
import { getAllHashTags } from "../api/api-twittes";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  layoutDispatchContext,
  toggleDrawer,
} from "../../context/layoutContext";

const RightSidebar = () => {
  const [hashTags, setHashTags] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("650"));

  const dispatch = useContext(layoutDispatchContext);
  const navigate=useNavigate()

  const handleClick = () => {
    setOpen(!open);
  };
  const onExit = () => {
    setOpen(!open);
    localStorage.clear()
    navigate('/login')
  };

  React.useEffect(() => {
    getAllHashTags((isok, data) => {
      if (isok) {
        setHashTags(data.slice(13, 20));
      } else {
        console.log(data);
      }
    });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.rightSide}>
      <Grid container alignItems="center" justifyContent="space-between">
        <TwitterIcon className={classes.twitterLogo} />
        <Link to="/">
          <Typography className={classes.logoType}> توییتر فارسی</Typography>
        </Link>
        {isMobileSize && (
          <IconButton
            className={classes.closebtn}
            onClick={() => toggleDrawer(dispatch)}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Grid>

      {isMobileSize ? (
        <List>
          <ListItem
            button
            className={classes.hotHashtags}
            onClick={() => toggleDrawer(dispatch)}
          >
            <Link to="/">
              <Grid container justifyContent="flex-start" alignItems="center">
                <HomeIcon className={classes.homeLogo} />
                <Typography className={classes.listText}>خانه</Typography>
              </Grid>
            </Link>
          </ListItem>
          <ListItem
            button
            className={classes.hotHashtags}
            onClick={() => toggleDrawer(dispatch)}
          >
            <Link to="/bestreporters">
              <Grid container justifyContent="flex-start" alignItems="center">
                <AssignmentIndIcon className={classes.bestReportLogo} />
                <Typography className={classes.listText}>
                  بهترین خبرنگاران
                </Typography>
              </Grid>
            </Link>
          </ListItem>

          <ListItem
            button
            className={classes.hotHashtags}
            onClick={handleClick}
          >
            <Grid container className={classes.hotHashtagWrapper}>
              <WhatshotIcon className={classes.hotHashtagIcon} />
              <Typography className={classes.listText}>
                داغ ترین هشتگ ها
              </Typography>

              {open ? <ExpandLess /> : <ExpandMore />}
            </Grid>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Grid container direction="column" alignItems="center">
                {hashTags.map((item) => (
                  <ButtonBase
                    key={item._id}
                    className={classes.hashtagParent}
                    onClick={() => toggleDrawer(dispatch)}
                  >
                    <div style={{ width: "100%" }}>
                      <Link to={`/hashtag/${item.text}`}>
                        <Grid container alignItems="center">
                          <img
                            src="/images/hashtag.png"
                            width={"30px"}
                            alt="hashtag"
                          />
                          <Typography className={classes.hashtags}>
                            {item.text}
                          </Typography>
                        </Grid>
                      </Link>
                    </div>
                  </ButtonBase>
                ))}
              </Grid>
            </List>
          </Collapse>
          <ListItem
            button
            className={classes.hotHashtags}
            onClick={onExit}
          >   
              <Grid container justifyContent="flex-start" alignItems="center">
                <ExitToAppIcon color='secondary' className={classes.exitLogo}/>
                <Typography className={classes.listText}>خروج</Typography>
              </Grid>
          </ListItem>
        </List>
      ) : (
        <>
          <Grid container className={classes.hashtagHeader}>
            <WhatshotIcon className={classes.hotHashtagIcon} />
            <Typography className={classes.hashtagTitle}>
              داغ ترین هشتگ ها
            </Typography>
          </Grid>
          <Grid container direction="column" alignItems="center">
            {hashTags.map((item) => (
              <ButtonBase key={item._id} className={classes.hashtagParent}>
                <div style={{ width: "100%" }}>
                  <Link to={`/hashtag/${item.text}`}>
                    <Grid container alignItems="center">
                      <img
                        src="/images/hashtag.png"
                        width={"30px"}
                        alt="hashtag"
                      />
                      <Typography className={classes.hashtags}>
                        {item.text}
                      </Typography>
                    </Grid>
                  </Link>
                </div>
              </ButtonBase>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default RightSidebar;
