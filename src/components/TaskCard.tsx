import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Tag from "./Tag";
import { AiFillDelete } from "react-icons/ai";

const TaskCard = () => {
  return (
    <Card sx={{ minWidth: 300 }} variant="outlined">
      <CardContent>
        <Typography
          sx={{ fontSize: 14, mb: 1 }}
          color="text.secondary"
          gutterBottom
        >
          Word of the Day
        </Typography>

        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignContent={"center"}
          sx={{ height: 30 }}
        >
          <Stack direction={"row"} spacing={1}>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
          </Stack>
          <IconButton>
            <AiFillDelete />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
