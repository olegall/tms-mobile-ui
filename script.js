/* Интерфейс водителя */
$(document).ready(function(){
	$('.menu-nav span:first').css("border-bottom","3px solid white");
 });

$('.complete').click(function(){
	$('.info').empty();
	$('.info').append(noTransportation());
 });

$('.info, .info-v2').on('click','.routeDetails', openRouteDetails);
$('.info, .info-v2').on('click','#routeDetailsClicked', closeRouteDetails);

  $('.menu-nav').on('click','.menu-current',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info').empty()
			  .append(`<div class = "current-info">
							<span><b>Дата начала</b></span>				
							<label style="display: block;">20.06.2019 08:15</label>
							<br/>
							<span><b>Маршрут</b></span></br>
							<div class="current-route">
								г.Рязань,ул.Ленина,д.1
								<span class = "circle"></span>
								г.Москва,ул.Тверская,д.3
							</div>				
						</div>
						<div class="notifications">
							<span>TMS • Охранник Иван Иванов</span>
							<img src="images/icon.png" class="userPhoto">
							<p>Въезжайте на территорию!</p>
							<p class="timeNotification">12:03</p>					
						</div>	
						<div class ="complete">
							<button class="">Завершить</button>
						</div>`);
});

 $('.menu-nav').on('click','.menu-new',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info').empty()
			  .append(`<div class = "new-table">
							<table class="list-table">
							<tbody>
								<tr>
									<td>
										<b>Дата начала</b>
									</td>
									<td>
										<b>Маршрут</b>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td class="date">01.08.19</td>
									<td class="route">г.Рязань,ул.Ленина,д.1 - г.Москва,ул.Тверская,д.3
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
								<tr>
									<td class="date">03.08.19</td>
									<td class="route">г.Рязань,ул.Костычева,д.9 - г.Москва,ул.Арбат,д.8
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>									
								<tr>
									<td class="date">04.08.19</td>
									<td class="route">г.Рязань,ул.Лесная,д.4 - г.Москва,ул.Брюллова,д.15
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
								<tr>
									<td class="date">06.08.19</td>
									<td class="route">г.Рязань,ул.Луговая,д.6 - г.Москва,ул.Боженко,д.32
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
								<tr>
									<td class="date">06.08.19</td>
									<td class="route">г.Рязань,ул.Нахимова,д.7 - г.Москва,ул.Каменка,д.21
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
								<tr>
									<td class="date">09.08.19</td>
									<td class="route">г.Рязань,ул.Некрасова,д.42 - г.Москва,ул.Карьер,д.2
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>`);
  });

  $('.menu-nav').on('click','.menu-history',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info').empty()
			  .append(`<div class="history">
							<div class="list">
								<table class="list-table">
									<tbody>
										<tr>
											<td>
												<b>Номер</b>
											</td>
											<td>
												<b>Период</b>
											</td>
											<td>
												<b>Маршрут</b>
											</td>
											<td></td>
										</tr>
										<tr>	
											<td>164891</td>
											<td>12.06.09-05.06.09</td>
											<td>г. Рязань, ул.Ленина, д.1 - г.Москва, ул.Тверская, д.15</td>
											<td><button class="routeDetails"><i class="arrowUp"></i></button></td>
										</tr>
										<tr>
											<td>165281</td>
											<td>12.06.09-05.06.09</td>
											<td>г. Рязань, ,ул.Лесная, д.4 - г.Москва, ул.Каменка, д.21</td>
											<td><button class="routeDetails"><i class="arrowUp"></i></button></td>
										</tr>
										<tr>
											<td>236549</td>
											<td>12.06.09-05.06.09</td>
											<td>г. Рязань, ул.Луговая, д.6 - г.Москва, ул.Карьер, д.33</td>
											<td><button class="routeDetails"><i class="arrowUp"></i></button></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>`);	
});

/* v2 */

$(document).ready(function(){
	$('.menu-current-v2').css("border-bottom","3px solid white");
 });
	
$('.menu-nav').on('click','.menu-current-v2',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-v2').empty()
			  .append(`<div class = "current-info-v2">
						  <span><b>Дата начала</b></span>				
						<label style="display: block;">20.06.2019 08:15</label>
						<br/>
						<span><b>Маршрут</b></span></br>
						  <div class="current-route-v2">
							г.Рязань,ул.Ленина,д.1
							<span class = "circle"></span>
							г.Москва,ул.Тверская,д.3
							<span class = "circle"></span>
							г.Рязань,ул.Лесная,д.4
							<span class = "circle"></span>
							г.Москва,ул.Брюллова,д.15
							<span class = "circle"></span>
							г.Рязань,ул.Ленина,д.1
							<span class = "circle"></span>
							г.Москва,ул.Каменка, д.21
							<span class = "circle"></span>
							г.Москва,ул.Карьер, д.33
							<span class = "circle"></span>
							г.Москва,ул.Боженко,д.32
							<span class = "circle"></span>
							г.Москва,ул.Арбат,д.8
							<span class = "circle"></span>
							г.Москва,ул.Боженко,д.32
							<span class = "circle"></span>
							г.Москва,ул.Арбат,д.8
							<span class = "circle"></span>
							г.Москва,ул.Боженко,д.32
							<span class = "circle"></span>
							г.Москва,ул.Арбат,д.8
							<span class = "circle"></span>
							г.Рязань,ул.Лесная,д.4
							<span class = "circle"></span>
							г.Москва,ул.Брюллова,д.15
							<span class = "circle"></span>
							г.Рязань,ул.Ленина,д.1
							<span class = "circle"></span>
							г.Москва,ул.Каменка, д.21
							<span class = "circle"></span>
							г.Москва,ул.Карьер, д.33
							<span class = "circle"></span>
							г.Москва,ул.Боженко,д.32
							<span class = "circle"></span>
							г.Москва,ул.Арбат,д.8
							<span class = "circle"></span>
							г.Москва,ул.Боженко,д.32
							<span class = "circle"></span>
							г.Москва,ул.Арбат,д.8
							<span class = "circle"></span>
							г.Москва,ул.Боженко,д.32
							<span class = "circle"></span>
							г.Москва,ул.Арбат,д.8
							<span class = "circle"></span>
							г.Рязань,ул.Лесная,д.4
							<span class = "circle"></span>
							г.Москва,ул.Брюллова,д.15
							<span class = "circle"></span>
							г.Рязань,ул.Ленина,д.1
							<span class = "circle"></span>
							г.Москва,ул.Каменка, д.21
						</div>				
					</div>
					<div class ="complete-v2">
						<button class="">Завершить</button>
					 </div>`);
});

 $('.menu-nav').on('click','.menu-new-v2',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-v2').empty()
			  .append(`<div class = "new-table">
							<table class="list-table">
							<tbody>
								<tr>
									<td>
										<b>Дата начала</b>
									</td>
									<td>
										<b>Маршрут</b>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td class="date">01.08.19</td>
									<td class="route">г.Рязань,ул.Ленина,д.1 - г.Москва,ул.Тверская,д.3
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
								<tr>
									<td class="date">03.08.19</td>
									<td class="route">г.Рязань,ул.Костычева,д.9 - г.Москва,ул.Арбат,д.8
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>									
								<tr>
									<td class="date">04.08.19</td>
									<td class="route">г.Рязань,ул.Лесная,д.4 - г.Москва,ул.Брюллова,д.15
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
								<tr>
									<td class="date">06.08.19</td>
									<td class="route">г.Рязань,ул.Луговая,д.6 - г.Москва,ул.Боженко,д.32
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
								<tr>
									<td class="date">06.08.19</td>
									<td class="route">г.Рязань,ул.Нахимова,д.7 - г.Москва,ул.Каменка,д.21
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
								<tr>
									<td class="date">09.08.19</td>
									<td class="route">г.Рязань,ул.Некрасова,д.42 - г.Москва,ул.Карьер,д.2
									</td>
									<td class="route-details">
										<button class="routeDetails">
											<i class="arrowUp"></i>
										</button>
									</td>
									<td>
										<button class="tableButton">Старт</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>`);
  });

  $('.menu-nav').on('click','.menu-history-v2',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-v2').empty()
			  .append(`<div class="history">
							<div class="list">
								<table class="list-table">
									<tbody>
										<tr>
											<td>
												<b>Номер</b>
											</td>
											<td>
												<b>Период</b>
											</td>
											<td>
												<b>Маршрут</b>
											</td>
											<td></td>
										</tr>
										<tr>	
											<td>164891</td>
											<td>12.06.09-05.06.09</td>
											<td>г. Рязань, ул.Ленина, д.1 - г.Москва, ул.Тверская, д.15</td>
											<td><button class="routeDetails"><i class="arrowUp"></i></button></td>
										</tr>
										<tr>
											<td>165281</td>
											<td>12.06.09-05.06.09</td>
											<td>г. Рязань, ,ул.Лесная, д.4 - г.Москва, ул.Каменка, д.21</td>
											<td><button class="routeDetails"><i class="arrowUp"></i></button></td>
										</tr>
										<tr>
											<td>236549</td>
											<td>12.06.09-05.06.09</td>
											<td>г. Рязань, ул.Луговая, д.6 - г.Москва, ул.Карьер, д.33</td>
											<td><button class="routeDetails"><i class="arrowUp"></i></button></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>`);	
});


/* Интерфейс охранника */
$(document).ready(function(){
	$('.menu-territory').css("border-bottom","3px solid white");
 });

$('.info-security').on('click','.routeDetails',openRouteDetails);
$('.info-security').on('click',"#routeDetailsClicked", closeRouteDetails);

$('.menu-nav').on('click','.menu-territory',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-security').empty()
					   .append(`<div class="near-territory">
									<table class="list-table">
											<tbody>
												<tr>
													<td><b>ТС</b></td>
													<td><b>ФИО</b></td>
													<td></td>
													<td></td>
												</tr>
												<tr>
													<td><span class="rectangle1"></span><span class="car-name">Volvo 20т</span></td>
													<td class="full-name">Константинопольский О.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
													<td class="invite">
														<button class="tableButton">Приг-ть</button>
													</td>
												</tr>
												<tr>
													<td><span class="rectangle2"></span><span class="car-name">Volvo 15т</span></td>
													<td class="full-name">Иванов А.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
													<td class="invite">
														<button class="tableButton">Приг-ть</button>
													</td>
												</tr>
												<tr>
													<td><span class="rectangle3"></span><span class="car-name">Volvo 11т</span></td>
													<td class="full-name">Иванов А.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
													<td class="invite">
														<button class="tableButton">Приг-ть</button>
													</td>
												</tr>
											</tbody>
											</table>
										</div>
										`);
});

$('.menu-nav').on('click','.menu-loading',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-security').empty()
					   .append(`<div class="info-security-loading">
									<table class="list-table">
										<tbody>
											<tr>
												<td><b>ТС</b></td>
												<td><b>ФИО</b></td>
												<td></td>
											</tr>
											<tr>
												<td><span class="rectangle1"></span><span class="car-name">Volvo 20т</span></td>
												<td class="full-name">Константинопольский О.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
											</tr>
											<tr>
												<td><span class="rectangle2"></span><span class="car-name">Volvo 15т</span></td>
												<td class="full-name">Иванов А.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
											</tr>
											<tr>
												<td><span class="rectangle3"></span><span class="car-name">Volvo 11т</span></td>
												<td class="full-name">Иванов А.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
											</tr>
										</tbody>
										</table>
									</div>`);
});

$('.menu-nav').on('click','.menu-departure',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-security').empty()
					   .append(`<div class="info-departure">
									<table class="list-table">
										<tbody>
											<tr>
												<td><b>ТС</b></td>
												<td><b>ФИО</b></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td><span class="rectangle1"></span><span class="car-name">Volvo 20т</span></td>
												<td class="full-name">Константинопольский О.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
												<td class="invite">
													<button class="tableButton">Приг-ть</button>
												</td>
											</tr>
											<tr>
												<td><span class="rectangle2"></span><span class="car-name">Volvo 15т</span></td>
												<td class="full-name">Иванов А.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
												<td class="invite">
													<button class="tableButton">Приг-ть</button>
												</td>
											</tr>
											<tr>
												<td><span class="rectangle3"></span><span class="car-name">Volvo 11т</span></td>
												<td class="full-name">Иванов А.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
												<td class="invite">
													<button class="tableButton">Приг-ть</button>
												</td>
											</tr>
										</tbody>
										</table>
									</div>`);
})
/* Интерфейс кладовщика */
$(document).ready(function(){
	$('.menu-wait-loading').css("border-bottom","3px solid white");
 });

$('.info-storekeeper').on('click',".routeDetails",openRouteDetails);
$('.info-storekeeper').on('click',"#routeDetailsClicked",closeRouteDetails);

$('.menu-nav').on('click','.menu-wait-loading',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-storekeeper').empty()
						  .append(`<div class="wait-loading">
										<table class="list-table">
											<tbody>
												<tr>
													<td><b>ТС</b></td>
													<td><b>ФИО</b></td>
													<td></td>
													<td></td>
												</tr>
												<tr>
													<td><span class="rectangle1"></span><span class="car-name">Volvo 20т</span></td>
													<td class="full-name">Константинопольский О.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
													<td class="invite">
														<button class="tableButton">Приг-ть</button>
													</td>
												</tr>
												<tr>
													<td><span class="rectangle2"></span><span class="car-name">Volvo 15т</span></td>
													<td class="full-name">Иванов А.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
													<td class="invite">
														<button class="tableButton">Приг-ть</button>
													</td>
												</tr>
												<tr>
													<td><span class="rectangle3"></span><span class="car-name">Volvo 11т</span></td>
													<td class="full-name">Иванов А.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
													<td class="invite">
														<button class="tableButton">Приг-ть</button>
													</td>
												</tr>
											</tbody>
											</table>
										</div>`);
});

$('.menu-nav').on('click','.menu-sk-loading',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-storekeeper').empty()
						  .append(`<div class="loading-in-progress">
										<table class="list-table">
										<tbody>
											<tr>
												<td><b>ТС</b></td>
												<td><b>ФИО</b></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td><span class="rectangle1"></span><span class="car-name">Volvo 20т</span></td>
												<td class="full-name">Константинопольский О.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
												<td class="invite">
													<button class="tableButton">Конец</button>
												</td>
											</tr>
											<tr>
												<td><span class="rectangle2"></span><span class="car-name">Volvo 15т</span></td>
												<td class="full-name">Иванов А.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
												<td class="invite">
													<button class="tableButton">Конец</button>
												</td>
											</tr>
											<tr>
												<td><span class="rectangle3"></span><span class="car-name">Volvo 11т</span></td>
												<td class="full-name">Иванов А.А.</td>
												<td class="route-details">
													<button class="routeDetails">
													<i class="arrowUp"></i>
													</button>
												</td>
												<td class="invite">
													<button class="tableButton">Конец</button>
												</td>
											</tr>
										</tbody>
										</table>
									</div>`);
});

$('.menu-nav').on('click','.menu-finished-loading',function() {
	$(this).css("border-bottom","3px solid white");
	$(this).siblings().css("border-bottom" , "");
	$('.info-storekeeper').empty()
						  .append(`<div class="info-finished-loading">
										<table class="list-table">
											<tbody>
												<tr>
													<td><b>ТС</b></td>
													<td><b>ФИО</b></td>
													<td></td>
												</tr>
												<tr>
													<td><span class="rectangle1"></span><span class="car-name">Volvo 20т</span></td>
													<td class="full-name">Константинопольский О.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
												</tr>
												<tr>
													<td><span class="rectangle2"></span><span class="car-name">Volvo 15т</span></td>
													<td class="full-name">Иванов А.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
												</tr>
												<tr>
													<td><span class="rectangle3"></span><span class="car-name">Volvo 11т</span></td>
													<td class="full-name">Иванов А.А.</td>
													<td class="route-details">
														<button class="routeDetails">
														<i class="arrowUp"></i>
														</button>
													</td>
												</tr>
											</tbody>
										</table>`);
});
			
  function noTransportation() {
	return '<p class="noTransportation">Нет перевозок</p>';
  }	

function openRouteDetails() {
	let idx = $(this).index('.routeDetails');
	let i = '.arrowUp:eq(' + idx + ')';
	$(this).attr("id", "routeDetailsClicked");
	$(i).css({'border' : 'solid #2979ff',
			  'border-width' : '0 3px 3px 0',
			  'transform' : 'rotate(44deg)',
			  'transition' : 'transform 365ms cubic-bezier(0.4, 0 , 0.2 , 1)'});
}

function closeRouteDetails() {
	$(this).attr("id", "");
	let idx = $(this).index('.routeDetails');
	let i = '.arrowUp:eq(' + idx + ')';
	$(i).css({'border' : 'solid rgba(32,33,36,.5)',
			  'border-width' : '0 3px 3px 0',
			  'transform' : 'rotate(-136deg)',
			  'transition' : 'transform 365ms cubic-bezier(0.4, 0 , 0.2 , 1)'});
}
