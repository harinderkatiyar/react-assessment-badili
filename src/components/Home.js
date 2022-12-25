import React from "react";
import Header from "./Header/Header";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/joy/Autocomplete";
import Search from "@mui/icons-material/Search";
import monstera from "../../src/asset/img/licensed-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import TabGallery from "./tab-gallery/tab-gallery";
import monstera1 from "../../src/asset/img/licensed-image.jpg";
import monstera2 from "../../src/asset/img/51aaHPLkuiL._SY879_.jpg";
import monstera3 from "../../src/asset/img/Monstera-deliciosa.jpg";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const collection = [
  { src: monstera1, caption: "Caption eleven" },
  { src: monstera2, caption: "Caption twelve" },
  { src: monstera3, caption: "Caption thirteen" },
];

const Home = () => {
  const [other, setOther] = React.useState("");
  const [price, setPrice] = React.useState("");
  const handleChange1 = (event) => {
    setPrice(event.target.value);
  };

  const handleChange = (event) => {
    setOther(event.target.value);
  };

  const [value, setValue] = React.useState(4);
  const [ratingValue, setValue1] = React.useState(4);
  const [inputValue, setInputValue] = React.useState("");

  const [valueTab, setValueTab] = React.useState("1");

  const handleChange2 = (event, newValue) => {
    setValueTab(newValue);
  };
  return (
    <>
      <div className=" m-0 shadow rounded bg-white">
        <Header />
        <Container fluid>
          <div className="row">
            <div className="col-md-2">
              <div className="py-3 border-bottom border-end">
                <h5>Filter</h5>
              </div>
              <div className="py-3 border-bottom border-end">
                <h6>Categories</h6>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Gardening" />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Plants"
                  />
                  <FormControlLabel control={<Checkbox />} label="Seeds" />
                  <FormControlLabel control={<Checkbox />} label="Bulbs" />
                  <FormControlLabel control={<Checkbox />} label="Planters" />
                </FormGroup>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Other
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={other}
                    onChange={handleChange}
                    label="Other"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="py-3 border-bottom border-end pe-3">
                <h6>Price range</h6>
                <Box sx={{ display: "flex" }}>
                  <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Min
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">€</InputAdornment>
                      }
                      label="Amount"
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Max
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">€</InputAdornment>
                      }
                      label="Amount"
                    />
                  </FormControl>
                </Box>
                <Button fullWidth variant="contained" color="success">
                  Set Price
                </Button>
              </div>
              <div className="py-3 border-bottom border-end pe-3">
                <h6>Rating</h6>
                <Box sx={{ display: "flex" }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked className="p-0" />}
                    className="m-0"
                  />
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Typography component="legend">above</Typography>
                </Box>
              </div>
              <div className="py-3 border-bottom border-end pe-3">
                <div className="card p-3 bg-success text-white">
                  <h4>GET 30% OFF</h4>
                  <p>Share your referral code and get discount!</p>
                  <Button className="bg-warning text-dark">Share</Button>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3 border-end">
              <FormControl fullWidth id="free-solo-demo" className="bg-grey">
                <Autocomplete
                  className="bg-white"
                  freeSolo
                  startDecorator={<Search />}
                  placeholder="Type anything"
                  options={searchAny.map((option) => option.title)}
                  onChange={(event, newValueSearch) => {
                    setValue(newValueSearch);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                />
              </FormControl>
              <Typography level="body2" className="py-3">
                <code>Search result for </code>
                <Typography variant="soft" sx={{ py: 0.4 }}>
                  <code>
                    <strong>{`'${inputValue}'`}</strong>
                  </code>
                </Typography>
              </Typography>

              <div className="d-flex justify-content-between align-items-center">
                <p>Sort</p>
                <Button variant="contained" color="success">
                  Relevance
                </Button>
                <Button variant="outlined" color="secondary">
                  Popular
                </Button>
                <Button variant="outlined" color="secondary">
                  Most New
                </Button>
                <Select
                  labelId="demo-simple-select-standard-label1"
                  id="demo-simple-select-standard1"
                  value={price}
                  label="Price"
                  onChange={handleChange1}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Min to Max">Min to Max</MenuItem>
                  <MenuItem value="Max to Min">Max to Min</MenuItem>
                </Select>
              </div>

              <div className="row mt-3">
                <div className="col-md-6 mb-3">
                  <div className="product-box">
                    <div className="product-img">
                      <img
                        src={monstera}
                        alt="monstera"
                        className="img-fluid"
                      />
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="content-details p-3">
                      <h5>Monstera DK Var (L)</h5>
                      <Box sx={{ display: "flex" }}>
                        <Rating
                          name="simple-controlled"
                          value={ratingValue}
                          onChange={(event, newValueRating) => {
                            setValue1(newValueRating);
                          }}
                        />
                        <Typography component="legend">(85)</Typography>
                      </Box>
                      <Box className="d-flex justify-content-between align-items-center">
                        <div>
                          <small>Price</small>
                          <h6>€325</h6>
                        </div>
                        <div>
                          <Button variant="outlined">Add to cart</Button>
                        </div>
                      </Box>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  mb-3">
                  <div className="product-box">
                    <div className="product-img">
                      <img
                        src={monstera}
                        alt="monstera"
                        className="img-fluid"
                      />
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="content-details p-3">
                      <h5>Monstera DK Var (L)</h5>
                      <Box sx={{ display: "flex" }}>
                        <Rating
                          name="simple-controlled"
                          value={ratingValue}
                          onChange={(event, newValueRating) => {
                            setValue1(newValueRating);
                          }}
                        />
                        <Typography component="legend">(85)</Typography>
                      </Box>
                      <Box className="d-flex justify-content-between align-items-center">
                        <div>
                          <small>Price</small>
                          <h6>€325</h6>
                        </div>
                        <div>
                          <Button variant="outlined">Add to cart</Button>
                        </div>
                      </Box>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  mb-3">
                  <div className="product-box">
                    <div className="product-img">
                      <img
                        src={monstera}
                        alt="monstera"
                        className="img-fluid"
                      />
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="content-details p-3">
                      <h5>Monstera DK Var (L)</h5>
                      <Box sx={{ display: "flex" }}>
                        <Rating
                          name="simple-controlled"
                          value={ratingValue}
                          onChange={(event, newValueRating) => {
                            setValue1(newValueRating);
                          }}
                        />
                        <Typography component="legend">(85)</Typography>
                      </Box>
                      <Box className="d-flex justify-content-between align-items-center">
                        <div>
                          <small>Price</small>
                          <h6>€325</h6>
                        </div>
                        <div>
                          <Button variant="outlined">Add to cart</Button>
                        </div>
                      </Box>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  mb-3">
                  <div className="product-box">
                    <div className="product-img">
                      <img
                        src={monstera}
                        alt="monstera"
                        className="img-fluid"
                      />
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="content-details p-3">
                      <h5>Monstera DK Var (L)</h5>
                      <Box sx={{ display: "flex" }}>
                        <Rating
                          name="simple-controlled"
                          value={ratingValue}
                          onChange={(event, newValueRating) => {
                            setValue1(newValueRating);
                          }}
                        />
                        <Typography component="legend">(85)</Typography>
                      </Box>
                      <Box className="d-flex justify-content-between align-items-center">
                        <div>
                          <small>Price</small>
                          <h6>€325</h6>
                        </div>
                        <div>
                          <Button variant="outlined">Add to cart</Button>
                        </div>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              {/* <img src={monstera} alt="monstera" className="img-fluid" /> */}
              <TabGallery input={collection} ratio={`3:2`} />
              <h4>Monstera Deliciosa Variegata(Large)</h4>
              <p>
                <small>
                  Monstera deliciosa, the Swiss cheese plant or split-leaf
                  philodendron is a species of flowering plant native to
                  tropical forests of southern Mexico, south to Panama. It has
                  been introduced to many tropical areas, and has become a
                  mildly invasive species in Hawaii, Seychelles, Ascension
                  Island and the Society Islands.
                </small>
              </p>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={valueTab}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange2}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Details" value="1" />
                      <Tab label="Reviews" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <div className="d-flex justify-content-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button variant="contained" color="success">
                        €325 - Add to cart
                      </button>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
const searchAny = [
  { title: "Monstera" },
  { title: "Monstera DK Var" },
  { title: "Monstera 2" },
  { title: "Monstera 3" },
  { title: "Monstera 4" },
];
export default Home;
