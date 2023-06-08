module LdcThemeSpecial
  module Hooks
    class LdcIssues < Redmine::Hook::ViewListener
      def view_layouts_base_html_head(context = {})
        if context[:controller] && (context[:controller].is_a?(IssuesController))
          return '' +
              stylesheet_link_tag("AssigneeChange.css", :plugin => "ldc_theme_special", :media => "screen") +
              stylesheet_link_tag("HistoryTabs.css", :plugin => "ldc_theme_special", :media => "screen") +
              javascript_include_tag('AssigneeChange.js', :plugin => 'ldc_theme_special') +
              javascript_include_tag('FieldDescription.js', :plugin => 'ldc_theme_special') +
              javascript_include_tag('HistoryTabs.js', :plugin => 'ldc_theme_special')
        else
          return ''
        end
      end

      render_on :view_issues_form_details_bottom, :partial => "issues/form_ldc_extras"
    end

    class LdcIssuesDialogShow < Redmine::Hook::ViewListener
      render_on :view_issues_show_details_bottom, :partial => "layouts/dialog_AssigneeChange"
    end

    class LdcIssuesDialogNew < Redmine::Hook::ViewListener
      render_on :view_issues_new_top, :partial => "layouts/dialog_AssigneeChange"
    end
  end
end

