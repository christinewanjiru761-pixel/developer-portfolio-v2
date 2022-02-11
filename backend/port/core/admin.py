from django.contrib import admin
from . import models


class ProjectsAdmin(admin.ModelAdmin):
    list_display = [
        'name',
    ]

    list_display_links = [
        'name'
    ]


class FeedbackAdmin(admin.ModelAdmin):
    list_display = [
        'first_name',
        'last_name',
    ]

    list_display_links = [
        'first_name'
    ]


admin.site.register(models.Projects, ProjectsAdmin)
admin.site.register(models.Feedback, FeedbackAdmin)