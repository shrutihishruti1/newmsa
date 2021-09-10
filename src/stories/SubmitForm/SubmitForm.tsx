import React, { useState } from "react";
import { TextField, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "../Button/Button";
import "./submit-form.css";
import { useMutation } from "@apollo/client";
import { ADD_CONTENT } from "../../api/mutations";
import { AddContent } from "../../api/__generated__/AddContent";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      color: "white",
    },
  },
}));
export interface SubmitFormProps {}

export const SubmitForm: React.FC<SubmitFormProps> = () => {
  const classes = useStyles();
  const year = "YEAR_2021";
  const [contentName, setContentName] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [description, setDescription] = useState("");
  const [submit, setSubmit] = useState(false);

  const [addContent] = useMutation<AddContent>(ADD_CONTENT)
  
  const isVideoUrl = (value: string) => {
      const urlRegex =
    ////^(http[s]{0,1}:\/\/){0,1}(github.com\/)([a-zA-Z0-9\-~!@#$%^&*+?:_\/=<>\.]*)?$/i;
    /^(http:\/\/|https:\/\/)(vimeo\.com|youtu\.be|www\.youtube\.com)\/([\w\/]+)([\?].*)?$/igm
  return urlRegex.test(value);
}

  const [hasFocus, setHasFocus] = useState(false);

//   const handleSubmit = () => {
//       alert ("Submit Form Clicked!");
//   }

const handleSubmit = async() => {
    if (contentName !== "" && isVideoUrl(videoUrl)) {
        console.log({"contentName": contentName, "videoUrl": videoUrl, "Description": description });

        
        try {
            await addContent({variables: {
                name: contentName,
                description: description,
                link: videoUrl,
                year: year,
            }})
            setSubmit(true)
        } catch(e) {
            console.log(e)
        }
    }else{
        setHasFocus(true);
    }
};


  return (
    <Container className="form_container">
      <Typography variant="h4">Hello! Lets Make your Passion Count!</Typography>
      {submit ? (
        <Grid>
          Congratulations! Your Video has been submitted successfully.
        </Grid>
      ) : null}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Content Name"
            fullWidth
            error={hasFocus && contentName === ""}
            value={contentName}
            className={hasFocus && contentName === "" ? "" : classes.root}
            helperText="Invalid Content Name"
            onChange={(e) => setContentName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Youtube URL"
            fullWidth
            error={hasFocus && (videoUrl === "" || !isVideoUrl(videoUrl))}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className={
              hasFocus && (videoUrl === "" || !isVideoUrl(videoUrl))
                ? ""
                : classes.root
            }
            helperText="Invalid URL"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={5}
            placeholder="Introduce your Content..."
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        className="form_button"
        backgroundColor="blue"
        label="Submit"
        onClick={handleSubmit}
        primary
        size="medium"
      />
    </Container>
  );
};
export default SubmitForm;