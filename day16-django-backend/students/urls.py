from django.urls import path
from . import views

urlpatterns = [
    path("hello/", views.hello, name="hello"),
    path("status/", views.api_status, name="api-status"),
    path("students/", views.StudentListCreate.as_view(), name="student-list"),
    path("students/<int:pk>/", views.StudentDetail.as_view(), name="student-detail"),
]