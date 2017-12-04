class LDCAppleIcons < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "layouts/apple_icons"
end