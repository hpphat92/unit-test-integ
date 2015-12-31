describe('Service: lists', function () {
	var $controller,controller,scope;
	beforeEach(function(){
		module('calculatorApp');
		inject(function (_$controller_,_$rootScope_){
			$controller = _$controller_;
			scope = _$rootScope_.$new();
			controller = $controller('CalculatorController', { $scope: scope });
        });
	});
	it('should ok',function(){
		expect(1+1).to.equal(2);
	});
	it('should have 2 to less than 3',function(){
		expect(2).to.be.below(3);
	});
	it('z should have default value of zero', function () {
		scope.x = 3;
		scope.y = 2;
		scope.sum();
		expect(scope.z).to.equal(5);
	});
});