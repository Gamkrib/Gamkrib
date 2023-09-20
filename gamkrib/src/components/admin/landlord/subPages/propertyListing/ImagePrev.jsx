// import { useRef, useState } from "react";
// import {
//   Text,
//   Group,
//   createStyles,
//   rem,
//   Button,
//   Paper,
//   Container,
//   Image,
//   SimpleGrid,
// } from "@mantine/core";
// import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
// import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";

// const useStyles = createStyles((theme) => ({
//   wrapper: {
//     position: "relative",
//     marginBottom: rem(30),
//   },

//   dropzone: {
//     borderWidth: rem(1),
//     paddingBottom: rem(50),
//   },

//   icon: {
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[3]
//         : theme.colors.gray[4],
//   },

//   control: {
//     position: "relative",
//     width: rem(250),
//     left: `calc(50% - ${rem(125)})`,
//     bottom: rem(-20),
//     background: "green",
//   },
// }));
// export const ImagePrev = (props) => {
//   const { classes, theme } = useStyles();
//   const [files, setFiles] = useState();
//   const openRef = useRef(null);

//   //image previewer
//   const previews = files.map((file, index) => {
//     const imageUrl = URL.createObjectURL(file);
//     return (
//       <Image
//         key={index}
//         src={imageUrl}
//         width="15rem"
//         radius="md"
//         sx={{ display: "flex", borderRadius: "15px" }}
//         imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
//       />
//     );
//   });

//   console.log(files);

//   return (
//     <>
//       {" "}
//       <Container size="lg">
//         <div className={classes.wrapper}>
//           <Dropzone
//             openRef={openRef}
//             onDrop={(file) => {
//               setFiles(file);
//             }}
//             className={classes.dropzone}
//             radius="md"
//             accept={IMAGE_MIME_TYPE}
//             multiple={true}
//             maxSize={30 * 1024 ** 2}
//           >
//             <div style={{ pointerEvents: "none" }}>
//               <Group position="center">
//                 <Dropzone.Accept>
//                   <IconDownload
//                     size={rem(50)}
//                     color={theme.colors[theme.primaryColor][6]}
//                     stroke={1.5}
//                   />
//                 </Dropzone.Accept>
//                 <Dropzone.Reject>
//                   <IconX
//                     size={rem(50)}
//                     color={theme.colors.red[6]}
//                     stroke={1.5}
//                   />
//                 </Dropzone.Reject>
//                 <Dropzone.Idle>
//                   <IconCloudUpload
//                     size={rem(50)}
//                     color={
//                       theme.colorScheme === "dark"
//                         ? theme.colors.dark[0]
//                         : theme.black
//                     }
//                     stroke={1.5}
//                   />
//                 </Dropzone.Idle>
//               </Group>

//               <Text ta="center" fw={700} fz="lg" mt="xl">
//                 <Dropzone.Accept>Drop files here</Dropzone.Accept>
//                 <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
//                 <Dropzone.Idle>Upload resume</Dropzone.Idle>
//               </Text>
//               <Text ta="center" fz="sm" mt="xs" c="dimmed">
//                 Drag&apos;n&apos;drop files here to upload. We can accept only{" "}
//                 <i>.pdf</i> files that are less than 30mb in size.
//               </Text>
//             </div>
//           </Dropzone>

//           <Button
//             className={classes.control}
//             size="md"
//             radius="xl"
//             onClick={() => openRef.current?.()}
//           >
//             Select files
//           </Button>
//           <Container>
//             <SimpleGrid
//               cols={4}
//               breakpoints={[{ maxWidth: "sm", cols: 1 }]}
//               mt={previews.length > 0 ? "xl" : 0}
//             >
//               {previews}
//             </SimpleGrid>
//           </Container>
//         </div>
//       </Container>
//     </>
//   );
// };

import React, { useRef, useState } from "react";
import {
  Text,
  Group,
  createStyles,
  rem,
  Button,
  Paper,
  Container,
  Image,
  SimpleGrid,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "relative",
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20),
    background: "green",
  },
}));
export const ImagePrev = () => {
  const { classes, theme } = useStyles();
  const [files, setFiles] = useState();
  const openRef = useRef(null);

  //image previewer
  const previews = files?.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        width="15rem"
        radius="md"
        sx={{ display: "flex", borderRadius: "15px" }}
        imageProps={{ onLoad: () => URL?.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <>
      {" "}
      <Container size="lg">
        <div className={classes.wrapper}>
          <Dropzone
            openRef={openRef}
            onDrop={(file) => {
              setFiles(file);
            }}
            className={classes.dropzone}
            radius="md"
            accept={IMAGE_MIME_TYPE}
            multiple={true}
            maxSize={30 * 1024 ** 2}
          >
            <div style={{ pointerEvents: "none" }}>
              <Group position="center">
                <Dropzone.Accept>
                  <IconDownload
                    size={rem(50)}
                    color={theme.colors[theme.primaryColor][6]}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size={rem(50)}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconCloudUpload
                    size={rem(50)}
                    color={
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[0]
                        : theme.black
                    }
                    stroke={1.5}
                  />
                </Dropzone.Idle>
              </Group>

              <Text ta="center" fw={700} fz="lg" mt="xl">
                <Dropzone.Accept>Drop files here</Dropzone.Accept>
                <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                <Dropzone.Idle>Upload resume</Dropzone.Idle>
              </Text>
              <Text ta="center" fz="sm" mt="xs" c="dimmed">
                Drag&apos;n&apos;drop files here to upload. We can accept only{" "}
                <i>.pdf</i> files that are less than 30mb in size.
              </Text>
            </div>
          </Dropzone>

          <Button
            className={classes.control}
            size="md"
            radius="xl"
            onClick={() => openRef.current?.()}
          >
            Select files
          </Button>
          <Container>
            <SimpleGrid
              cols={4}
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
              mt={previews?.length > 0 ? "xl" : 0}
            >
              {previews}
            </SimpleGrid>
          </Container>
        </div>
      </Container>
    </>
  );
};
