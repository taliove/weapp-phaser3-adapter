describe('test', () => {
  it('instance of', () => {
    class Person {
    }
    class Student extends Person {
    }
    class Something {
    }
    Something.prototype = new Student()
    const s = new Something()

    Student.prototype = s.__proto__

    expect(s instanceof Student).toEqual(true)
    expect(s instanceof Person).toEqual(true)
  })
})
