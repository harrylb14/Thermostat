feature 'it stores data across reloads' do
  scenario 'temperature is resumed when reloaded' do
    visit '/'
    page.find('#temperature-down').click
    visit '/'
    expect(page.find('#temperature')).not_to have_content '20'
    expect(page.find('#temperature')).to have_content '19'
  end
end
    