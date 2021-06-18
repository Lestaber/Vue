import {mount} from '@vue/test-utils'
import Calculator from '../views/PageCalc'

describe('Calculator input tests', () => {
  it('Test operand1 input value', async () => {
    const wrapper = mount(Calculator)
  
    wrapper.find('input[name=operand1]').setValue('1')
    expect(wrapper.vm.op1).toBe(1)
  })
  
  it('Test operand2 input value', async () => {
    const wrapper = mount(Calculator)
  
    wrapper.find('input[name=operand2]').setValue('1')
    expect(wrapper.vm.op2).toBe(1)
  })
})

describe('Calculator methods tests', () => {
  it('Test addition operation', async () => {
    const wrapper = mount(Calculator)
  
    wrapper.find('input[name=operand1]').setValue('150')
    wrapper.find('input[name=operand2]').setValue('200')
    wrapper.find('.btn[name="+"]').trigger('click')
    expect(wrapper.vm.result).toBe(350)
  })

  it('Test subtraction operation', async () => {
    const wrapper = mount(Calculator)
  
    wrapper.find('input[name=operand1]').setValue('60')
    wrapper.find('input[name=operand2]').setValue('40')
    wrapper.find('.btn[name="-"]').trigger('click')
    expect(wrapper.vm.result).toBe(20)
  })

  it('Test division operation', async () => {
    const wrapper = mount(Calculator)

    wrapper.find('input[name=operand1]').setValue('10')
    wrapper.find('input[name=operand2]').setValue('2')
    wrapper.find('.btn[name="/"]').trigger('click')
    expect(wrapper.vm.result).toBe('5')
  })

  it('Test multiplication operation', async () => {
    const wrapper = mount(Calculator)

    wrapper.find('input[name=operand1]').setValue('5')
    wrapper.find('input[name=operand2]').setValue('5')
    wrapper.find('.btn[name="*"]').trigger('click')
    expect(wrapper.vm.result).toBe(25)
  })

  it('Test exponentiation operation', async () => {
    const wrapper = mount(Calculator)

    wrapper.find('input[name=operand1]').setValue('3')
    wrapper.find('input[name=operand2]').setValue('3')
    wrapper.find('.btn[name="x*"]').trigger('click')
    expect(wrapper.vm.result).toBe(27)
  })

  it('Test division with remainder operation', async () => {
    const wrapper = mount(Calculator)

    wrapper.find('input[name=operand1]').setValue('34')
    wrapper.find('input[name=operand2]').setValue('5')
    wrapper.find('.btn[name="1/x"]').trigger('click')
    expect(wrapper.vm.result).toBe(6)
  })

  it('Test reset operation', async () => {
    const wrapper = mount(Calculator)

    wrapper.find('span[data-result]')
    wrapper.find('.btn[data-clear]').trigger('click')
    expect(wrapper.vm.result).toBe("")
  })
})

describe('Calculator error tests', () => {
  it('Test error of division', async () => {
    const wrapper = mount(Calculator)

    wrapper.find('div[data-error]')
    wrapper.find('input[name=operand2]').setValue('0')
    wrapper.find('.btn[name="/"]').trigger('click')
    expect(wrapper.vm.error).toBe('Делить на 0 нельзя!')
  })

  it('Test error of division with remainder', async () => {
    const wrapper = mount(Calculator)

    wrapper.find('div[data-error]')
    wrapper.find('input[name=operand2]').setValue('0')
    wrapper.find('.btn[name="1/x"]').trigger('click')
    expect(wrapper.vm.error).toBe('Делить на 0 нельзя!')
  })
})

describe('Calculator show keyboard tests', () => {
  it('Test show keyboard', async () => {
    const wrapper = mount(Calculator)

    // wrapper.find('input[data-showKeyboard]')
    wrapper.find('input[type="radio"]').trigger('click')
    expect(wrapper.find('input[data-showKeyboard]').isVisible()).toBe(true)
  })
})

describe('Calculator keyboard tests', () => {
  it('Test keyboard numbers', async () => {
    const wrapper = mount(Calculator)

    wrapper.find('input[name=operand1]')
    wrapper.find('input[name=operand2]')
    wrapper.find('.btn[name="1"]').trigger('click')
    // expect(wrapper.vm.op1).toBe(1)
    expect(wrapper.vm.op2).toBe(1)
  })

  // it('Test keyboard numbers', async () => {
  //   const wrapper = mount(Calculator)

  //   wrapper.find('input[name=operand1]')
  //   wrapper.find('input[name=operand2]')
  //   wrapper.find('.btn[name="2"]').trigger('click')
  //   expect(wrapper.vm.op1).toBe(2)
  //   expect(wrapper.vm.op2).toBe(2)
  // })

  // it('Test keyboard numbers', async () => {
  //   const wrapper = mount(Calculator)

  //   wrapper.find('input[name=operand1]')
  //   wrapper.find('input[name=operand2]')
  //   wrapper.find('.btn[name="3"]').trigger('click')
  //   expect(wrapper.vm.op1).toBe(3)
  //   expect(wrapper.vm.op2).toBe(3)
  // })

  // it('Test keyboard numbers', async () => {
  //   const wrapper = mount(Calculator)

  //   wrapper.find('input[name=operand1]')
  //   wrapper.find('input[name=operand2]')
  //   wrapper.find('.btn[name="4"]').trigger('click')
  //   expect(wrapper.vm.op1).toBe(4)
  //   expect(wrapper.vm.op2).toBe(4)
  // })
})