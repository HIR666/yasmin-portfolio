import { Container, Grid, Typography, Paper, Button } from "@mui/material";
import React from "react";
import MediaCard from "../components/MediaCard";
import { InstagramEmbed } from "react-social-media-embed";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ my: 3 }}>
          <Paper sx={{ p: 2 }} elevation={5}>
            <Typography variant="h3">Yasmin Ali Digital Portfolio</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ my: 3 }}>
          <Typography variant="h3" textAlign={"center"}>
            Photos
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446276036444219/photo_2024-01-18_10-36-45.jpg?ex=65bb4bbf&is=65a8d6bf&hm=7c8e9890b4660f8d163dbe1b2a6fbbbe40285be1b7b9be4963c9e7d94c605e12&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446274446802976/photo_2024-01-17_13-09-25.jpg?ex=65bb4bbf&is=65a8d6bf&hm=92c9545e557551620412ab6a2b8e2768ec26ed3baaa273c4569c5e42da35eb53&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446274727825469/photo_2024-01-17_13-10-43.jpg?ex=65bb4bbf&is=65a8d6bf&hm=0f68ae437e2cd34b646986c25a47af3b392ab372add78d11f2ab216591a87c99&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446274983669860/photo_2024-01-17_13-11-02.jpg?ex=65bb4bbf&is=65a8d6bf&hm=25a1868ae608537c2b677645d5ad20bff2b92c99b03cc02d5b671789457d3efc&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446275210166282/photo_2024-01-17_13-11-55.jpg?ex=65bb4bbf&is=65a8d6bf&hm=d9af17eaa88250fa785f764f5fb4f23a35cb73f55e17dd1c3e59c8868c69e8fa&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446275470217317/photo_2024-01-17_14-15-10.jpg?ex=65bb4bbf&is=65a8d6bf&hm=0a7195942624c5347d2013a0b41e9f913025ec9b61abbc6fca89239100d35937&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446275721867314/photo_2024-01-17_14-15-11.jpg?ex=65bb4bbf&is=65a8d6bf&hm=63df0779bfd06993d6eeea8195bbc82029f52d43313efe93cd752f07c07054b6&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446273935093820/photo_2024-01-18_10-42-10.jpg?ex=65bb4bbf&is=65a8d6bf&hm=2abc7572884e89cae756328016ef4607e87d13ce841f8111ae4a854f4f8addd7&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446276300689491/photo_2024-01-18_10-42-09.jpg?ex=65bb4bbf&is=65a8d6bf&hm=a87dfd9823d46f104fcc1068786465633d209d338492636cb8e6474a34d2a56e&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446276615254109/photo_2024-01-18_10-42-10_2.jpg?ex=65bb4bbf&is=65a8d6bf&hm=bf7779161951cd75b04508d7692592ca8aa9fa5b7e8a5629135f949ca24e3cb9&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446361898037348/photo_2024-01-18_10-42-12.jpg?ex=65bb4bd4&is=65a8d6d4&hm=47a8e6a5a5b559b2e0391d442b100f0cb839b86876670e64628f02c6d5286ea1&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446362216796190/photo_2024-01-18_10-42-11_2.jpg?ex=65bb4bd4&is=65a8d6d4&hm=50c0e8a06b564ab3f19b72c9c7ab0051d0606a1537a6353afa25524103966b4d&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446362535571466/photo_2024-01-18_10-42-11.jpg?ex=65bb4bd4&is=65a8d6d4&hm=61383909ce2e42d676bc87551cfbac1f4ec111d3c7a7b0854220a5026341ac87&"
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            // name={"نداء استغاثة"}
            // caption={"تم التبليغ عن حريق بفعل هايزن بركر"}
            img={
              "https://cdn.discordapp.com/attachments/1065085519891009636/1197446362845945886/photo_2024-01-18_10-42-12_2.jpg?ex=65bb4bd4&is=65a8d6d4&hm=18504dc5c7d2b5c8e17312a0b6d4ec5d48621e686e768820db39f3b52256a532&"
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sx={{ my: 3 }}>
          <Typography variant="h3" textAlign={"center"}>
            Videos
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CxD5dDRoy76/?igsh=bHpwMTVpYzFqeHFl"
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/Cy1MEBPoMwN/?igsh=dXhnOWp6Z3RoeWp3"
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CylOt6cMyps/?igsh=eXg4YzJxamN6MDA2"
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/Cx-6v-GoCCi/?igsh=MXVmNHp4ejU1MzFtMg=="
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CxsgMY6o5si/?igsh=MW41MHVpa3M5dHFodQ=="
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CxqGe4JI1k0/?igsh=ZXZmcnFzNGNhaHNm"
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/Cxk3WK1IzG-/?igsh=MTFvejVtMjJ5NWJ2OA=="
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CxN_OAfoww5/?igsh=eGhzM3hiZnk2a3p5"
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CwhnT4UqYP5/?igsh=ZDNlZDc0MzIxNw=="
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CwhnT4UqYP5/?igsh=eXkya3JjY3Q5MGl0"
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CueUWLWqPpu/?igsh=dHpnZ3Nxa2w1bmdi"
              // width={328}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/Cu9lJl2K9wN/?igsh=MXNzaWI3M2ZlZ3JqYQ=="
              // width={328}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sx={{ my: 3 }}>
          <Typography variant="h3" textAlign={"center"}>
            Docs & Other Formats
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }} elevation={5}>
            <Link to="../assets/small_angel.xlsx" target="_blank" download>
              <Button color="info" variant="contained">
                الملاك الصغير
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeScreen;
