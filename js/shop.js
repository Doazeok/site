var ShopModel = function() {
  var self = this;
  self.check = ko.observable(false);

  // товар
  self.goods = ko.observable().extend({
    required: {
      message: 'Сделайте выбор'
    }
  });

  // количество
  self.amount = ko.observable().extend({
    required: {
      message: 'Заполните поле'
    }
  });

  // чекбокс
  self.delivery = ko.observable(false);

  // страна
  self.country = ko.observable().extend({
    required: {
      message: 'Заполните поле'
    }
  });

  // город
  self.city = ko.observable('').extend({
    required: {
      message: 'Заполните поле'
    }
  });

  //дом
  self.house = ko.observable().extend({
    required: {
      onlyIf: function() {
        return self.check() == true;
      },
    message: 'Заполните поле'
    }
  });

  //квартира
  self.apartment = ko.observable().extend({
    required: {
      onlyIf: function() {
        return self.check() == true;
      },
    message: 'Заполните поле'
    }
  });

  //product 
  self.list = ko.observableArray();
  self.products = ko.observableArray([
    {name: 'Белый нефрит', price: 123}, 
    {name: 'Хризопрас', price: 286},
    {name: 'Авантюрин', price: 350},
    {name: 'Аквамарин', price: 1423},
    {name: 'Гессонит', price: 2320},
    {name: 'Бледный алмаз', price: 4256},
    {name: 'Рубин', price: 4563},
    {name: 'Зелёный алмаз', price: 5245},
    {name: 'Жёлтый алмаз', price: 6353},
    {name: 'Звёздчатый сапфир', price: 7245},
  ]);

  self.errorMessage = ko.observable(false);

  //--X--
  self.remove = function() {
    self.list.remove(this)
  };

  self.submit = function() {
    if (shopModel.errors().length === 0) {
      self.clickBtnOK()
    }
    else {
      shopModel.errors.showAllMessages();
      self.clickBtnNook()
    }
  };

};//ShopModel

var shopModel = new ShopModel();

////////////////////////////////////////////////////////KO

// ...........................Чекбокс
ShopModel.prototype.checkChange = function() {
  var dis = document.getElementsByClassName("dis");
  for (var i = 0; i < 2; i++){
    if(dis[i].disabled)
      dis[i].disabled=false
    else
      dis[i].disabled=true
  };

  if(this.check() == true)
    this.check(false)
  else 
    this.check(true)
};

// ...........................Кнопка субмит
ShopModel.prototype.clickBtnOK = function() {
  var number = -1;//убрать
  // number нужен для уникальности каждого shopModel.list
  // элемента, чтобы remove удалил его по значению.
  number++;
  var productInBucket = {
    name: number,
    goods: shopModel.goods(),
    amount: shopModel.amount(),
    country: shopModel.country(),
    city: shopModel.city(),

    check: shopModel.check(),
  };

  if (productInBucket.check){
    productInBucket.house = shopModel.house();
    productInBucket.apartment = shopModel.apartment()
  };

  shopModel.list.push(productInBucket);

//каждый пункт карзины - элемент массива list, порядок согласуется с визуальным
//цена и имя товара в list.goods
};


//ошибка
ShopModel.prototype.clickBtnNook = function() {
  shopModel.errorMessage(true);
  setTimeout(function() {
    shopModel.errorMessage(false)
    }, 
    2000
  );
};

// test
  shopModel.goods(shopModel.products()[0])
  shopModel.amount('1')
  shopModel.country('asd')
  shopModel.city('sad')

  // shopModel.delivery(true)
  // shopModel.house('12')
  // shopModel.apartment('2')

