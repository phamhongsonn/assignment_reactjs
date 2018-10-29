
class Forecast extends React.Component {
	constructor(props) {
		super(props);

		this.state = ({
			Weather: [],
		})
	}
	componentDidMount = () => {
		fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Hanoi&key=83aa3525be95457c9bd2d13c875d1784")
			.then(result => {
				result.json().then(WeatherInfo => {
					this.setState({
						Weather: WeatherInfo
					})
				})
			})

	}
	render() {
		var d = new Date();
		var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		var ico = [];
		var C = [];
		var des = [];
		var winspd = [];
		var feel = [];
		var humi = [];
		var vis = [];
		var dewpt = [];
		var datetime = [];
		var mili = [];
		var date = [];
		var weekday = [];

		if (this.state.Weather.length != 0) {
			for (var i = 0; i < 10; i++) {
				ico[i] = "https://www.weatherbit.io/static/img/icons/" + this.state.Weather.data[i].weather.icon + ".png";
				C[i] = this.state.Weather.data[i].temp;
				des[i] = this.state.Weather.data[i].weather.description;
				winspd[i] = this.state.Weather.data[i].wind_spd.toFixed(1);
				feel[i] = this.state.Weather.data[i].app_max_temp;
				humi[i] = this.state.Weather.data[i].rh;
				vis[i] = this.state.Weather.data[i].vis.toFixed(1);
				dewpt[i] = this.state.Weather.data[i].dewpt;
				datetime[i] = this.state.Weather.data[i].datetime;
				mili[i] = new Date(Date.parse(datetime[i]));
				date[i] = mili[i].getDate();
				weekday[i] = day[mili[i].getDay()];
			}
		}
		return (
			<div id="content">
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-12 text-center">
							<h2>{this.state.Weather.city_name}, {this.state.Weather.country_code}</h2>
							<img src={ico[0]} alt=""></img>
							<h1>{C[0]}<sup>o</sup>C</h1>
							<h2>{des[0]}</h2>
							<p>Update of : {d.getHours()}:{d.getMinutes()}</p>
							<div className="row">
								<div className="col-xs-12 col-sm-4 col-md-4">
									<p>Feel like: {feel[0]}<sup>o</sup>C</p>
								</div>
								<div className=" col-xs-12 col-sm-4 col-md-4">
									<p>Wind Speed: {winspd[0]} m/s</p>
								</div>
								<div className="col-xs-12 col-sm-4 col-md-4">
									<p>Humidity: {humi[0]}%</p>
								</div>
								<div className="col-xs-12 col-sm-6 col-md-6">
									<p>Visibility: {vis[0]}km</p>
								</div>
								<div className="col-xs-12 col-sm-6 col-md-6">
									<p>Dewpoint: {dewpt[0]}<sup>o</sup></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="scrollmenu">
					<h3>Daily</h3>
					<hr className="line"></hr>
					<div className="row text-center flex-nowrap">
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[0]}&nbsp;{date[0]}</h5>
							<img src={ico[0]} alt=""></img>
							<h5>{C[0]}<sup>o</sup>C</h5>
							<p>{des[0]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[1]}&nbsp;{date[1]}</h5>
							<img src={ico[1]} alt=""></img>
							<h5>{C[1]}<sup>o</sup>C</h5>
							<p>{des[1]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[2]}&nbsp;{date[2]}</h5>
							<img src={ico[2]} alt=""></img>
							<h5>{C[2]}<sup>o</sup>C</h5>
							<p>{des[2]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[3]}&nbsp;{date[3]}</h5>
							<img src={ico[3]} alt=""></img>
							<h5>{C[3]}<sup>o</sup>C</h5>
							<p>{des[3]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[4]}&nbsp;{date[4]}</h5>
							<img src={ico[4]} alt=""></img>
							<h5>{C[4]}<sup>o</sup>C</h5>
							<p>{des[4]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[5]}&nbsp;{date[5]}</h5>
							<img src={ico[5]} alt=""></img>
							<h5>{C[5]}<sup>o</sup>C</h5>
							<p>{des[5]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[6]}&nbsp;{date[6]}</h5>
							<img src={ico[6]} alt=""></img>
							<h5>{C[6]}<sup>o</sup>C</h5>
							<p>{des[6]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[7]}&nbsp;{date[7]}</h5>
							<img src={ico[7]} alt=""></img>
							<h5>{C[7]}<sup>o</sup>C</h5>
							<p>{des[7]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[8]}&nbsp;{date[8]}</h5>
							<img src={ico[8]} alt=""></img>
							<h5>{C[8]}<sup>o</sup>C</h5>
							<p>{des[8]}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<h5>{weekday[9]}&nbsp;{date[9]}</h5>
							<img src={ico[9]} alt=""></img>
							<h5>{C[9]}<sup>o</sup>C</h5>
							<p>{des[9]}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Forecast />,
	document.getElementById("root")
)