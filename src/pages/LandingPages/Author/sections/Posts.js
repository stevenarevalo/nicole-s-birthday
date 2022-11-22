/* eslint-disable react/prop-types */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

function Places(props) {
  // eslint-disable-next-line react/prop-types
  const { artists } = props;
  console.log(artists);
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h4" mb={6}>
            Estos son tus artistas más escuchados que iran el Estéreo Picnic 2023
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {artists?.map((artist) => (
            <Grid item xs={6} sm={6} lg={3}>
              <TransparentBlogCard key={artist.name} image={artist.image} title={artist.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
