feature 'loadpage' do
  scenario 'displays the default temperature on first load' do
    visit '/'
    expect(page.find('#temperature')).to have_content "20"
  end

  it 'can be increased' do
    visit('/')
    page.find('#temperature-up').click
    expect(page.find('#temperature')).to have_content '21'
    expect(page).not_to have_content '20'
  end
  
  it 'can be decreased' do
    visit('/')
    page.find('#temperature-down').click
    page.find('#temperature-down').click
    expect(page.find('#temperature')).to have_content '18'
    expect(page).not_to have_content '20'
  end

  it 'has a minimum temperature of 10 degrees' do
    visit('/')
    11.times { page.find('#temperature-down').click }
    expect(page.find('#temperature')).to have_content '10'
  end

  it 'can be reset' do
    visit('/')
    page.find('#temperature-down').click
    expect(page.find('#temperature')).not_to have_content '20'
    page.find('#temperature-reset').click
    expect(page.find('#temperature')).to have_content '20'
  end
end
