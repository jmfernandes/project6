mainApp.controller('CurrencyController', ['$scope', function($scope){
  $scope.options =
  [
  {
    name: 'American Dollar',
    value: 'American Dollar'
  },
  {
    name: 'Euro',
    value: 'Euro'
  },
  {
    name: 'Pound Sterling',
    value: 'Pound Sterling'
  },
  {
    name: 'Australian Dollar',
    value: 'Australian Dollar'
  },
  {
    name: 'Swiss Franc',
    value: 'Swiss Franc'
  },
  {
    name: 'Canadian Dollar',
    value: 'Canadian Dollar'
  },
  {
    name: 'Yen',
    value: 'Yen'
  }
  ];
  $scope.options2 =
  [
  {
    name: 'Euro',
    value: 'Euro'
  },
  {
    name: 'Pound Sterling',
    value: 'Pound Sterling'
  },
  {
    name: 'Australian Dollar',
    value: 'Australian Dollar'
  },
  {
    name: 'Swiss Franc',
    value: 'Swiss Franc'
  },
  {
    name: 'Canadian Dollar',
    value: 'Canadian Dollar'
  },
  {
    name: 'Yen',
    value: 'Yen'
  }
  ];

  $scope.message = 'This is the currency app';
  $scope.input = null;
  $scope.output = null;
  $scope.firstSelect = $scope.options[0];
  $scope.secondSelect = $scope.options2[0]; // can also use ng-init="secondSelect = options[0]" in select tag in html
  $scope.changevalue = null;
  $scope.currencyone = '$';
  $scope.inputvalue = null;
  $scope.first_unit = null;
  $scope.second_unit = null;
  $scope.is_unit = null;
  $scope.currencyone_unit = null;
  $scope.currencytwo_unit = null;


  $scope.change= function(value){
    switch (value) {
        case 'American Dollar':
        $scope.options2 =
        [
        {
          name: 'Euro',
          value: 'Euro'
        },
        {
          name: 'Pound Sterling',
          value: 'Pound Sterling'
        },
        {
          name: 'Australian Dollar',
          value: 'Australian Dollar'
        },
        {
          name: 'Swiss Franc',
          value: 'Swiss Franc'
        },
        {
          name: 'Canadian Dollar',
          value: 'Canadian Dollar'
        },
        {
          name: 'Yen',
          value: 'Yen'
        }
        ];
        $scope.secondSelect = $scope.options2[0];
        $scope.currencyone = '$';
          break;
        case 'Euro':
        $scope.options2 =
        [
        {
          name: 'American Dollar',
          value: 'American Dollar'
        },
        {
          name: 'Pound Sterling',
          value: 'Pound Sterling'
        },
        {
          name: 'Australian Dollar',
          value: 'Australian Dollar'
        },
        {
          name: 'Swiss Franc',
          value: 'Swiss Franc'
        },
        {
          name: 'Canadian Dollar',
          value: 'Canadian Dollar'
        },
        {
          name: 'Yen',
          value: 'Yen'
        }
        ];
        $scope.secondSelect = $scope.options2[0];
        $scope.currencyone = '€';
            break;
        case 'Pound Sterling':
        $scope.options2 =
        [
        {
          name: 'American Dollar',
          value: 'American Dollar'
        },
        {
          name: 'Euro',
          value: 'Euro'
        },
        {
          name: 'Australian Dollar',
          value: 'Australian Dollar'
        },
        {
          name: 'Swiss Franc',
          value: 'Swiss Franc'
        },
        {
          name: 'Canadian Dollar',
          value: 'Canadian Dollar'
        },
        {
          name: 'Yen',
          value: 'Yen'
        }
        ];
        $scope.secondSelect = $scope.options2[0];
        $scope.currencyone = '£';
            break;
        case 'Australian Dollar':
        $scope.options2 =
        [
        {
          name: 'American Dollar',
          value: 'American Dollar'
        },
        {
          name: 'Euro',
          value: 'Euro'
        },
        {
          name: 'Pound Sterling',
          value: 'Pound Sterling'
        },
        {
          name: 'Swiss Franc',
          value: 'Swiss Franc'
        },
        {
          name: 'Canadian Dollar',
          value: 'Canadian Dollar'
        },
        {
          name: 'Yen',
          value: 'Yen'
        }
        ];
        $scope.secondSelect = $scope.options2[0];
        $scope.currencyone = '$';
            break;
        case 'Swiss Franc':
        $scope.options2 =
        [
        {
          name: 'American Dollar',
          value: 'American Dollar'
        },
        {
          name: 'Euro',
          value: 'Euro'
        },
        {
          name: 'Pound Sterling',
          value: 'Pound Sterling'
        },
        {
          name: 'Australian Dollar',
          value: 'Australian Dollar'
        },
        {
          name: 'Canadian Dollar',
          value: 'Canadian Dollar'
        },
        {
          name: 'Yen',
          value: 'Yen'
        }
        ];
        $scope.secondSelect = $scope.options2[0];
        $scope.currencyone = 'Fr.';
            break;
        case 'Canadian Dollar':
        $scope.options2 =
        [
        {
          name: 'American Dollar',
          value: 'American Dollar'
        },
        {
          name: 'Euro',
          value: 'Euro'
        },
        {
          name: 'Pound Sterling',
          value: 'Pound Sterling'
        },
        {
          name: 'Australian Dollar',
          value: 'Australian Dollar'
        },
        {
          name: 'Swiss Franc',
          value: 'Swiss Franc'
        },
        {
          name: 'Yen',
          value: 'Yen'
        }
        ];
        $scope.secondSelect = $scope.options2[0];
        $scope.currencyone = '$';
            break;
        case 'Yen':
        $scope.options2 =
        [
        {
          name: 'American Dollar',
          value: 'American Dollar'
        },
        {
          name: 'Euro',
          value: 'Euro'
        },
        {
          name: 'Pound Sterling',
          value: 'Pound Sterling'
        },
        {
          name: 'Australian Dollar',
          value: 'Australian Dollar'
        },
        {
          name: 'Swiss Franc',
          value: 'Swiss Franc'
        },
        {
          name: 'Canadian Dollar',
          value: 'Canadian Dollar'
        }
        ];
        $scope.secondSelect = $scope.options2[0];
        $scope.currencyone = '¥';
            break;
        default:
            break;
    }
    $scope.changevalue = $scope.firstSelect;
  };

  $scope.calculate = function(first,second,value){
        switch (true) {
            case ((first == 'American Dollar') && (second == 'Euro')):
                return value*0.85;
            case ((first == 'American Dollar') && (second == 'Pound Sterling')):
                return value*0.78;
            case ((first == 'American Dollar') && (second == 'Australian Dollar')):
                return value*1.26;
            case ((first == 'American Dollar') && (second == 'Swiss Franc')):
                return value*0.96;
            case ((first == 'American Dollar') && (second == 'Canadian Dollar')):
                return value*1.27;
            case ((first == 'American Dollar') && (second == 'Yen')):
                return value*109.65;
            case ((first == 'Euro') && (second == 'American Dollar')):
                return value*0.96;
            case ((first == 'Euro') && (second == 'Pound Sterling')):
                return value*1.17;
            case ((first == 'Euro') && (second == 'Australian Dollar')):
                return value*1.49;
            case ((first == 'Euro') && (second == 'Swiss Franc')):
                return value*1.13;
            case ((first == 'Euro') && (second == 'Canadian Dollar')):
                return value*1.49;
            case ((first == 'Euro') && (second == 'Yen')):
                return value*128.76;
            case ((first == 'Pound Sterling') && (second == 'American Dollar')):
                return value*1.29;
            case ((first == 'Pound Sterling') && (second == 'Euro')):
                return value*1.10;
            case ((first == 'Pound Sterling') && (second == 'Australian Dollar')):
                return value*1.63;
            case ((first == 'Pound Sterling') && (second == 'Swiss Franc')):
                return value*1.24;
            case ((first == 'Pound Sterling') && (second == 'Canadian Dollar')):
                return value*1.63;
            case ((first == 'Pound Sterling') && (second == 'Yen')):
                return value*141.22;
            case ((first == 'Australian Dollar') && (second == 'American Dollar')):
                return value*0.79;
            case ((first == 'Australian Dollar') && (second == 'Euro')):
                return value*0.67;
            case ((first == 'Australian Dollar') && (second == 'Pound Sterling')):
                return value*0.61;
            case ((first == 'Australian Dollar') && (second == 'Swiss Franc')):
                return value*0.76;
            case ((first == 'Australian Dollar') && (second == 'Canadian Dollar')):
                return value*1.00;
            case ((first == 'Australian Dollar') && (second == 'Yen')):
                return value*86.65;
            case ((first == 'Swiss Franc') && (second == 'American Dollar')):
                return value*1.04;
            case ((first == 'Swiss Franc') && (second == 'Euro')):
                return value*0.89;
            case ((first == 'Swiss Franc') && (second == 'Pound Sterling')):
                return value*0.81;
            case ((first == 'Swiss Franc') && (second == 'Australian Dollar')):
                return value*1.32;
            case ((first == 'Swiss Franc') && (second == 'Canadian Dollar')):
                return value*1.32;
            case ((first == 'Swiss Franc') && (second == 'Yen')):
                return value*113.95;
            case ((first == 'Canadian Dollar') && (second == 'American Dollar')):
                return value*0.79;
            case ((first == 'Canadian Dollar') && (second == 'Euro')):
                return value*0.67;
            case ((first == 'Canadian Dollar') && (second == 'Pound Sterling')):
                return value*0.61;
            case ((first == 'Canadian Dollar') && (second == 'Australian Dollar')):
                return value*1.00;
            case ((first == 'Canadian Dollar') && (second == 'Swiss Franc')):
                return value*0.76;
            case ((first == 'Canadian Dollar') && (second == 'Yen')):
                return value*86.63;
            case ((first == 'Yen') && (second == 'American Dollar')):
                return value*0.0091;
            case ((first == 'Yen') && (second == 'Euro')):
                return value*0.0078;
            case ((first == 'Yen') && (second == 'Pound Sterling')):
                return value*0.0071;
            case ((first == 'Yen') && (second == 'Australian Dollar')):
                return value*0.012;
            case ((first == 'Yen') && (second == 'Swiss Franc')):
                return value*0.0088;
            case ((first == 'Yen') && (second == 'Canadian Dollar')):
                return value*0.012;
            default:
                return 0;
        }
  };


  $scope.convert = function(){
    $scope.output = $scope.calculate($scope.firstSelect.name,$scope.secondSelect.name,$scope.input);
    $scope.inputvalue = $scope.input;
    $scope.first_unit = $scope.firstSelect.name ;
    $scope.second_unit = $scope.secondSelect.name ;
    $scope.is_unit = 'is';
    $scope.currencyone_unit = $scope.currencyone;
    switch ($scope.secondSelect.name) {
      case 'American Dollar':
        $scope.currencytwo_unit = '$';
        break;
      case 'Euro':
        $scope.currencytwo_unit = '€';
        break;
      case 'Pound Sterling':
        $scope.currencytwo_unit = '£';
        break;
      case 'Australian Dollar':
        $scope.currencytwo_unit = '$';
        break;
      case 'Swiss Franc':
        $scope.currencytwo_unit = 'Fr.';
        break;
      case 'Canadian Dollar':
        $scope.currencytwo_unit = '$';
        break;
      case 'Yen':
        $scope.currencytwo_unit = '¥';
        break;
      default:
        break;
    }
  };

}]);
