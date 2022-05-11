import '../styles/Menu.css';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FaqIcon from '@mui/icons-material/Quiz';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <Stack className="container" direction="column" spacing={3}>
      <Button className="active" startIcon={<HomeIcon className="svg_icons" />}>
        Home
      </Button>
      <Button startIcon={<MenuIcon className="svg_icons" />}>Catalogue</Button>
      <Button startIcon={<StarOutlineOutlinedIcon className="svg_icons" />}>
        TOP Saeel
      </Button>
      <Button startIcon={<InfoOutlinedIcon className="svg_icons" />}>
        À Propos
      </Button>
      <Button startIcon={<FaqIcon className="svg_icons" />}>FAQ</Button>
    </Stack>
  );
}
